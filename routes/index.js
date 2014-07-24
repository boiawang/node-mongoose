var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.index = function(req, res) {
    User.find(function(err, users) {
        res.render('index', {
            users: users
        })
    });
};

exports.create = function(req, res) {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        content: req.body.comment,
        time: Date.now()
    });

    user.save(function(err, user, count) {
        res.redirect('/');
    });
},

exports.delete = function(req, res) {
    User.findOneAndRemove({
        username: req.body.userName
    }, function(err, user) {
        if (!err) res.send('删除成功');
    });
};

exports.edit = function() {

};