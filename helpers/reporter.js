var Models = require("../models");
var Reporter = Models.reporter;

exports.getReporters = function(req, res){
    Reporter.find()
    .then(function(reporters){
        res.json(reporters);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createReporter = function(req, res){
    let newReporter = req.body;
    Reporter.find()
    .then(function(reporters){
        reporters.forEach((reporter) => {
            if(reporter.email === newReporter.email)
            res.json({message: "User already exists"})
            return
        })
    })
    .then(function(){
        Reporter.create(newReporter)
        .then(function(reporter){
            res.json(reporter)
        })
        .catch(function(err){
            res.send(err)
        })
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.readReporter = function(req, res){
    Reporter.findById(req.params.reporterId)
    .then(function(reporter){
        res.json(reporter)
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.updateReporter = function(req, res){
    Reporter.findByIdAndUpdate({_id: req.params.reporterId}, req.body, {new:true})
    .then(function(updatedReporter){
        res.json({message: "We have updated your profile"})
    })
    .catch(function(err){
        res.send(err)
    })
}

exports.deleteUser = function(req, res){
    Reporter.remove({_id:req.params.reporterId})
    .then(function(){
        res.json({message:"We deleted your account"})
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports = exports;