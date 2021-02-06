var Models = require("../models");
var Report = Models.report;
const { report } = require("../routes/report");

exports.getReport = function(req, res){
    Report.find()
    .then(function(report){
        res.json(report);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createReport = function(req, res){
    Report.create(req.body)
    .then(function(newReport){
        res.json(newReport);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.readReport = function(req, res){
    Report.findById(req.params.reportId)
    .then(function(foundReport){
        res.json(foundReport);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateReport = function(req, res){
    Report.findByIdAndUpdate({_id: req.params.reportId}, req.body, {new: true})
    .then(function(updatedReport){
        res.json(updatedReport);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteReport = function(req, res){
    Report.remove({_id: req.params.reportId})
    .then(function(){
        res.json({message: "We deleted your report"});
    })
    .catch(function(err){
        res.send(err)
    })
}


module.exports = exports;