var express 			  = require('express'),
	app 				  = express(),
	bodyParser   		  = require('body-parser'),
	mongoose 			  = require('mongoose'),
	passport              = require("passport"),
	LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
	Models				  = require("./models"),
	User				  = Models.users

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var ReportRoutes = require("./routes/report");
var ReporterRoutes = require('./routes/reporter');
var RegisterRoutes = require('./routes/register');
// var LoginRoutes = require('./routes/login');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', function(req, res){
    res.send("Hello you come to the home for api!");
})

app.use('/api/reports', ReportRoutes);
app.use('/api/reporters', ReporterRoutes);
app.use('/api/register',RegisterRoutes);
// app.use('/api/login', LoginRoutes);
//Login Logic
app.post("/api/login", passport.authenticate("local", { 
    successRedirect: "/api/reporters", 
    failureRedirect: "/"
}), function (req, res) { 
});
    
app.listen(8000, function() {
	console.log('Api server started');
});

function isLoggedIn(req, res, next) { 
    if (req.isAuthenticated()) return next(); 
    res.redirect("/login"); 
}