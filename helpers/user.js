var Models = require("../models");
var User = Models.users;

exports.getUsers = function(req, res){
    User.find()
    .then(function(users){
        res.json(users);
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.registerUser = function(req, res){
    var username = req.body.username 
    var password = req.body.password 
    User.register(new User({ username: username }), 
            password, function (err, user) { 
        if (err) { 
            console.log(err); 
            return res.send(err); 
        } 
  
        passport.authenticate("local")( 
            req, res, function () { 
            res.json(user); 
        }); 
    });
}

module.exports = exports