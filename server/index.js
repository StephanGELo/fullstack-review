const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const helperFunc = require('../helpers/github.js');

var jsonParser = bodyParser.json()

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', jsonParser, function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  //console.log('in app.post line 14',req.body['username']); 
  var username = req.body['username'];

  // and get the repo information from the github API, then
  // save the repo information in the database
 
  helperFunc.getReposByUsername(username, function(repos) {
    //console.log('in app.post on line 18', repos);
    console.log("on line 23", repos);
    //var repos = jsonParser(repos);
    repos.forEach(function(repo) {
      // console.log("in app.post line 26" , repo);
      
      var userRepo = 
      {
        id: repo.owner.id,
        login: repo.owner.login,
        html_url: repo.owner.html_url,
        repos: {
                id: repo.id,
                name: repo.name,
                full_name: repo.full_name,
                forks: repo.owner.forks 
               }
      }
     // console.log("userId issssss", userRepo.id);
      db.save(userRepo);
      // db.save({ login: 'octocat',
      // id: 583231,
      // handle_url: 'https://api.github.com/users/octocat',
      // Repos:
      //  [ { repo_id: 18221276,
      //      repo_name: 'git-consortium',
      //      created_at: '2014-03-28T17:55:38Z',
      //      updated_at: '2017-12-06T01:15:32Z',
      //      forks_count: 27 },
      //    { repo_id: 20978623,
      //      repo_name: 'hello-worId',
      //      created_at: '2014-06-18T21:26:19Z',
      //      updated_at: '2017-11-09T19:05:22Z',
      //      forks_count: 39 },
      //    { repo_id: 1296269,
      //      repo_name: 'Hello-World',
      //      created_at: '2011-01-26T19:01:12Z',
      //      updated_at: '2018-01-02T03:26:18Z',
      //      forks_count: 1216 },
      //    { repo_id: 64778136,
      //      repo_name: 'linguist',
      //      created_at: '2016-08-02T17:35:14Z',
      //      updated_at: '2017-12-06T11:17:26Z',
      //      forks_count: 26 },
      //    { repo_id: 17881631,
      //      repo_name: 'octocat.github.io',
      //      created_at: '2014-03-18T20:54:39Z',
      //      updated_at: '2017-11-25T12:43:07Z',
      //      forks_count: 51 },
      //    { repo_id: 1300192,
      //      repo_name: 'Spoon-Knife',
      //      created_at: '2011-01-27T19:30:43Z',
      //      updated_at: '2018-01-03T06:37:29Z',
      //      forks_count: 95628 },
      //    { repo_id: 56271164,
      //      repo_name: 'test-repo1',
      //      created_at: '2016-04-14T21:29:25Z',
      //      updated_at: '2016-10-09T07:53:15Z',
      //      forks_count: 3 } ] });
    });
  });
});

var getReposFromDb = function (callback) {
  // check whether username exists in db
  // to a query to get repos based on username
  db.repos.find({login:username}, function (err, objs) {
    if (objs.length <= 25) {
       
    }
  });
  return repos;
};

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos

  var statusCode = statusCode || 200;
console.log('***************************************in app.get line 37', req);
  
  res.send(statusCode);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

