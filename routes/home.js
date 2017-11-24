var express = require('express');
var router = express.Router();

var repo = require('../services/repo.js');

router.get('/', function (req, res, next) {
    repo.getUserRepos(req.user.accessToken, function(repos) {
        res.render('home', {repos: repos});
    });      
});

module.exports = router;
