var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
/*
  user: 
   { accessToken: 'd0cb462261b1b4e59c50ba74f4f221e9a7f8782c',
     profile: 
      { id: '1140170',
        displayName: null,
        username: 'ThasLegendary',
        profileUrl: 'https://github.com/ThasLegendary',
        photos: [Array],
        provider: 'github',
        _raw: '{"login":"ThasLegendary","id":1140170,"avatar_url":"https://avatars1.githubusercontent.com/u/1140170?v=4","gravatar_id":"","url":"https://api.github.com/users/ThasLegendary","html_url":"https://github.com/ThasLegendary","followers_url":"https://api.github.com/users/ThasLegendary/followers","following_url":"https://api.github.com/users/ThasLegendary/following{/other_user}","gists_url":"https://api.github.com/users/ThasLegendary/gists{/gist_id}","starred_url":"https://api.github.com/users/ThasLegendary/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/ThasLegendary/subscriptions","organizations_url":"https://api.github.com/users/ThasLegendary/orgs","repos_url":"https://api.github.com/users/ThasLegendary/repos","events_url":"https://api.github.com/users/ThasLegendary/events{/privacy}","received_events_url":"https://api.github.com/users/ThasLegendary/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":"","location":null,"email":null,"hireable":null,"bio":null,"public_repos":4,"public_gists":0,"followers":1,"following":1,"created_at":"2011-10-20T07:59:57Z","updated_at":"2017-11-23T13:14:16Z"}',
        _json: [Object] } },
  route: Route { path: '/', stack: [ [Layer] ], methods: { get: true } } }
*/

  res.render('index', {title: 'The path to productivity'});
});

module.exports = router;
