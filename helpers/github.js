const config = require('../config.js');
//const db = require('../database/index.js');
const request = require('request');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

    
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    //url: 'FILL ME IN',
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
    request(options, (error, response, body) => {
      //console.log("on line 19", body);
      if (!error && response.statusCode === 200) {
       // console.log('in github, Request successful :', body);
        callback(JSON.parse(body));
      } else {
        console.error('Request unsuccessful');
      }
    });
}

module.exports.getReposByUsername = getReposByUsername;