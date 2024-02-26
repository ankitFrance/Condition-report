const  mongoose  = require("mongoose");

const reportSchema = new mongoose.Schema({


    Reporting_Information: {

        Name: {
            type: String
        },
        Role: {
            type: String
        }
    }
      
   
})

const Report = mongoose.model('Reportable', reportSchema )

module.exports = Report;