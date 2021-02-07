var mongoose = require("mongoose");

var reporterSchema = new mongoose.Schema({
    name : {
        type: String,
        required: "Name required"
    },
    email : {
        type: String,
        required: "Email required"
    },
    phone : {
        type: String,
        required: "Phone number required" 
    },
    profile : {
        type: String,
        default: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
    },
    reportsMade : []
});

var Reporter = mongoose.model('Reporter', reporterSchema);

module.exports = Reporter;