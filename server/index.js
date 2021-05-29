const express = require('express');
const mysql = require('mysql')
const model = require('../database/model.js')

var bodyParser = require('body-parser');
var helpers = require('../helpers/github.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log('post request!');
  var username = req.body.term;
  var userid

  model.createUser(username, (err,success) => {
    if (err) {
      console.log('error creating user', err)
     } else {
      console.log('create user passed');
     }
     model.getUserId(username, (err,success) => {
      if (err) {
        console.log('error getting userid user', err)
       } else {
        userid = success[0].id;
       }

    helpers.getReposByUsername(username, function(data, err) {


        for (var i = 0; i < data.length; i++) {
          var name = data[i].name;
          var stargazers = data[i].stargazers_count;
          var watchers = data[i].watchers_count;
          var size = data[i].size;
          model.save(name, stargazers, watchers, size, userid, (err,success) => {
            if(err) {
                console.log('final error', err)
            } else {
              // res.status(200).send('Order successfully submitted')
            }
          });
        }
      });
     });
  });

  res.end()
});



app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

