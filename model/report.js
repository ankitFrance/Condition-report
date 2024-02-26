const  mongoose  = require("mongoose");

const reportSchema = new mongoose.Schema({


    Reporting_Information: {

        Name: {
            type: String
        },
        Role: {
            type: String
        }, 
        Qualification: {
            type: String
        },
        Date_of_inspection: {
            type: Date
        }, 
        Tools: {
            type: String
        }, 
        Methods: {
            type: String
        }, 
        Purpose_of_condition_report : {
            type: String
        },
        Purpose_of_condition_report : {
            type: String
        }, 
        Name_of_client: {
            type: String 
        }, 
        Reliability:{
            type: String
        }, 
        Height:{
            type: String
        }, 
        Examination_center:{
            type: String
        }, 
        Platform:{
            type: String
        }, 
        Behind_glass:{
            type: String
        }, 
        Quantity:{
            type: String
        }, 
        Quality:{
            type: String
        }, 
        Nature:{
            type: String
        }, 
        Ruler:{
            type: String, 
            default: 'no'
        }, 
        Microscope:{
            type: String, 
            default: 'no'
        }, 
        Camera:{
            type: String,
            default: 'no'
        }, 
        Gloves:{
            type: String,
            default: 'no'
        }, 
        Clothing:{
            type: String,
            default: 'no'
        }, 
        Person_present_name:{
            type: String
        }, 
        Person_present_role:{
            type: String
        }, 
        Duration_of_assessment:{
            type: String
        }, 
        Inaccessibility:{
            type: String
        }, 
    }
      
   
})

const Report = mongoose.model('Reportable', reportSchema )

module.exports = Report;