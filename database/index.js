// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');

// let repoSchema = mongoose.Schema({
//   // TODO: your schema here!
// });

// let Repo = mongoose.model('Repo', repoSchema);

const mysql = require('mysql');
const config = require('./config.js');
const db = mysql.createConnection(config);

db.connect((err) => {
  if(err) throw err;
  else console.log(`Connected to database...`);
});





module.exports = db;