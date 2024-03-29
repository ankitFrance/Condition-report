const  mongoose  = require("mongoose");

const reportSchema = new mongoose.Schema({
    mongoIdStore: {
        GoogleUserMongoID :{
            type: String
        }, 
        OrcidUserMongoID : {
            type: String
        },
        NormalUserMongoID : {
            type: String
        }
      },

    Reporting_Information: {

        Name: {
            type: String
        },
        Role: {
            type: String
        }, 
        Institution: {
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
       
        Name_of_client: {
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
    }, 


    Object_identification: {

        Identification_no: {
            type: String
        },
        Date_of_acquisition: {
            type: Date
        }, 
        Name_of_asset: {
            type: String
        },
        Title: {
            type: String
        }, 
        Heading: {
            type: String
        }, 
        Author: {
            type: String
        }, 
        Origin : {
            type: String
        },
        Date_of_creation : {
            type: Date
        }, 
        Ownership: {
            type: String 
        }, 
        Protection:{
            type: String
        }, 
        Summary:{
            type: String
        }, 
        
    }, 

    Object_description: {

        Material: {
            type: String
        },
        Structure : {
            type: String
        }, 
        Surface: {
            type: String
        },
        History: {
            type: String
        }, 
        Technique: {
            type: String
        }, 
        Weight: {
            type: String
        }, 
        Constituent_elements : {
            type: String
        },
        No_of_elements : {
            type: String
        }, 
        Heights: {
            type: String 
        }, 
        Length :{
            type: String
        }, 
        Width:{
            type: String
        }, 
        Installation_notes:{
            type: String
        }, 
        Artist_installation_guide:{
            type: String
        }, 
        Object_creation_description:{
            type: String
        }, 
        
    }, 

    Object_environment: {

        Environment: {
            type: String
        },
        Effect : {
            type: String
        }, 
       
        
    }, 

    Conditions_description: {

        Info_observed: {
            type: String
        },
        Report_change : {
            type: String
        }, 
       
        
    },

    Diagnostic_and_recommendations: {

        Descriptive_diagnosis: {
            type: String
        },
        Recommendations : {
            type: String
        }, 

        Investigations : {
            type: String
        }
       
        
    }, 

    submissionTimestamp: {
        type: Date,
        default: Date.now // Set default value to current date and time
    }

   


      
   
})

const Report = mongoose.model('Reportable', reportSchema )

module.exports = Report;