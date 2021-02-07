var mongoose = require("mongoose");

//MONGOOSE SETUP
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);
mongoose.connect('mongodb://faraaz:winterfell@localhost/map_crime', {useNewUrlParser: true});

mongoose.Promise = Promise;
exports.report = require("./report")
exports.reporter = require("./reporter")
exports.users = require("./user");
module.exports = exports