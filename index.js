var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

var ReportRoutes = require("./routes/report");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function(req, res){
    res.send("Hello you come to the home for api!");
})

app.use('/api/report', ReportRoutes);
    
app.listen(8000, function() {
	console.log('Api server started');
});