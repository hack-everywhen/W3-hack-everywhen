var mongoose = require("mongoose");

var reportSchema = new mongoose.Schema({

    reporterID : {
        type: String
    },
    type : {
        type: String,
        default: "Feature"
    },
    geometry : {
        type : {
            type : String,
            default : "Point"
        },
        coordinates : [ String ]
    },
    properties : {
        description : {
            type: String
        }
    }
});

var Report = mongoose.model('Report', reportSchema);

module.exports = Report;