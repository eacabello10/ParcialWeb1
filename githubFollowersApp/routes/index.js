var express = require('express');
var router = express.Router();
var githubapi = require("github");



/* GET home page. */
router.get('/getFollowers/:user', function(req, res, next) {

    var github = new githubapi({});

    github.users.getFollowingForUser({
        username: req.params.user
    }, function(err, data) {
        res.json(data);
    });
});

module.exports = router;