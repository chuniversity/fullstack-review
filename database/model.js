const db = require('./index');

const save = (name, stargazers, watchers, size, userid, callback) => {
  const queryString = `Select name1 FROM names WHERE name1 = '${name}'`;
  theName = [name]
  db.query(queryString, [name], (err, success) => {
    if (err) {
      console.log('error at save query')
      callback(err, null)
    }
    else {
      var retrieval = success;
      console.log('query pass', retrieval)
      if (retrieval.length === 0 ) {
        const queryString = `INSERT INTO names(name1, stargazers, watchers, size, userid) VALUES (?,?,?,?,?)`

        db.query(queryString, [name, stargazers, watchers, size, userid], (err, success) => {
        if (err) {callback(err, null)}
        else {callback(null, success)}
         });
      } else {
        console.log('repo in database exist')
      }
    }
  });




};

const getUserId = (username, callback) => {
  const params = [username];
  const queryString = `Select id FROM users WHERE name1 = '${username}'`;
  db.query(queryString, params, (err, success) => {
    if (err) { callback(err, null)}
    else {callback(null, success)}
  });
}

const createUser = (username, callback) => {
  getUserId(username, (err,success) => {
    if (err) {
      console.log('error at the createUser getUserId', err)
    } else {
      if(success.length === 0) {
        console.log('user doesnt exist, inserting into database')
       const queryString = 'INSERT INTO users(name1) VALUES (?)';
        db.query(queryString, [username], (err, success) => {
         if (err) { callback(err, null)}
          else {callback(null, success)}
        });
      } else {
        console.log('user exists, not inserting into database')
        callback(null, success)
      }
    }
  })
}


module.exports = {
  save, createUser, getUserId,
};
