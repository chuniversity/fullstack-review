const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
    //todo

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };



  axios.get(options.url, options.headers)
    .then((data) => {
      callback(data.data)
    })
    .catch((err) => {
      console.log('error fetching repos')
    });
}

module.exports.getReposByUsername = getReposByUsername;