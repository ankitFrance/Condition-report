const express = require('express');
const router = express.Router();
const multer  = require('multer')
const Report = require('../model/report')
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

/*************************************************************************************** *******************************/

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    })
  
const uploadMiddleware = multer({ storage, limits: {   //middleware
  fieldNameSize: 100, 
  fieldSize: 25 * 1024 * 1024           
} })                            

/********************************************************************************************************************** */







router.get('/', (req, res) => {
  const parsedorcidName = req.query.orcidName;
  const parsedorcidEmploymentRoleTitle = req.query.orcidEmploymentRoleTitle;
  const parsedorcidEmploymentInstitution = req.query.orcidEmploymentInstitution
  const parsedgoogleUsername = req.query.googleUsername
  const parsednormalUserEmail=  req.query.email
  const parsedgoogleMongoDBid = req.query.googleMongoDBid
  const parsedorcidMongoDBid = req.query.orcidMongoID
  const parsedNormalUserMongoDBid = req.query.NormalUserMongoDBid
  
 
  res.render('index', {
    parsedorcidName: parsedorcidName,
    parsedorcidEmploymentRoleTitle: parsedorcidEmploymentRoleTitle,
    parsedorcidEmploymentInstitution :  parsedorcidEmploymentInstitution,
    parsedgoogleUsername : parsedgoogleUsername, 
    parsednormalUserEmail : parsednormalUserEmail,
    parsedgoogleMongoDBid : parsedgoogleMongoDBid,
    parsedorcidMongoDBid: parsedorcidMongoDBid,
    parsedNormalUserMongoDBid: parsedNormalUserMongoDBid, 
   
  });
 
 });










 /**************************************************************************************************************************************** */






 /***************************************************************************************************************************************************** */




 router.get('/Update/:id', async (req, res) => {
  try {
    
    const report = await Report.findById(req.params.id);

    if (!report) {

      console.error('error in update route ', error);

    }
    console.log(report)
    res.render('updatepage.ejs', { report: report });

  } catch (error) {

    console.error('error in update route ', error);
   
  }
});



 /***************************************************************************************************************************************************** */


 router.post('/updateSuccessful/:id', uploadMiddleware.fields([
  { name: 'ImageFile', maxCount: 5 },
  { name: 'ImageFile2', maxCount: 5 }
]), async (req, res) => {

  try {
    const reportId = req.params.id;
    const updatedData = req.body; 
    console.log('updateddddddd', updatedData)
  
    const updateObject = {

     
      Reporting_Information: {

         Name : updatedData.name,
         Role : updatedData.role,
         Institution : updatedData.institution,
         Date_of_inspection : updatedData.doii,
         Tools : updatedData.tools,
         Methods : updatedData.methods,
         Purpose_of_condition_report : updatedData.purpose_of_condition_report,
         Name_of_client : updatedData.name_of_client,
         Height : updatedData.height,
         Examination_center : updatedData.examination_center,
         Platform : updatedData.platform,
         Behind_glass : updatedData.behind_glass,
         Quantity : updatedData.quantity,
         Quality : updatedData.quality,
         Nature : updatedData.nature,
         Ruler : updatedData.ruler,
         Microscope : updatedData.microscope,
         Camera : updatedData.camera,
         Gloves :  updatedData.gloves,
         Clothing : updatedData.clothing,
         Person_present_name : updatedData.person_present_name,
         Person_present_role : updatedData.person_present_role,
         Inaccessibility : updatedData.inaccessibility,

         }, 

      Object_identification : {

         Identification_no : updatedData.identification_no,
         Date_of_acquisition: updatedData.date_of_acquisition,
         Name_of_asset : updatedData.name_of_asset,
         Title : updatedData.title,
         Heading : updatedData.heading,
         Author : updatedData.author,
         Origin : updatedData.origin,
         Date_of_creation : updatedData.date_of_creation,
         Ownership : updatedData.ownership,
         Protection : updatedData.protection,
         Summary : updatedData.summary,
        
      }, 

      Object_description : {
         Material : updatedData.material,
         Structure : updatedData.structure,
         Surface : updatedData.surface,
         History :  updatedData.history,
         Technique : updatedData.technique,
         Weight : updatedData.weight,
         Constituent_elements : updatedData.contituent_elements,
         Heights :  updatedData.heights,
         Length : updatedData.length,
         Width : updatedData.width,
         Installation_notes : updatedData.installation_notes,
         Artist_installation_guide : updatedData.artist_installation_guide,
         Object_creation_description : updatedData.object_creation_description,
      },

      Object_environment : {

         Environment : updatedData.environment,
         Effect : updatedData.effect,
        
      },

      Conditions_description : {

        Info_observed : updatedData.info_observed,
        Report_change : updatedData.report_change,
       
      },

      Diagnostic_and_recommendations : {

        Descriptive_diagnosis : updatedData.descriptive_diagnosis,
        Recommendations : updatedData.recommendations,
        Investigations : updatedData.investigations,
       
      }


    };


    const updatedReport = await Report.findByIdAndUpdate(reportId, updateObject, { new: true });

    if (!updatedReport) {
      return res.status(404).json({ error: 'Report not found' });
    }


    res.send('successful')
  } catch (error) {
    console.error('Error updating report:', error);
    
  }
});
 




 /************************************************************************************************************************************************/
  

 router.get('/report/:id', async (req, res) => {

  const collectIDfromURL = req.params.id; 
  
  
   if (!mongoose.isValidObjectId(collectIDfromURL)) {
    return res.status(400).send('Invalid ID');
  }
  
    try {
        
        const Constatdocument = await Report.findById(collectIDfromURL);
        if (!Constatdocument) {
            
            console.log('no record found coming from indexRoute.js ')
        }
       
        res.render('ConstatReportPerUser.ejs', { Constatdocument });

    } catch (error) {
        
        console.error('Error from indexRoute.js :', error);
        
    }

 })


 








/************************************************************************************************************************************ */

router.post('/feedback', uploadMiddleware.fields([
  { name: 'ImageFile', maxCount: 5 },
  { name: 'ImageFile2', maxCount: 5 }
]), async(req, res)=>{
   
  const formData = req.body;
  //console.log(formData)
  const captions = JSON.parse(formData.captions);
  const images = JSON.parse(formData.images);
  const originalNames = JSON.parse(formData.fileNames);
  const captions2 = JSON.parse(formData.captions2);
  const images2 = JSON.parse(formData.images2);
  const originalNames2 = JSON.parse(formData.fileNames2);
  


  




  const ReportForm = new Report({

 

    mongoIdStore: {
      GoogleUserMongoID : formData.mongoidGoogle,
      OrcidUserMongoID : formData.mongoidOrcid,
      NormalUserMongoID : formData.mongoidNormalUser
    },

    Reporting_Information : {

      Name: formData.name,
      Role: formData.role,
      Institution: formData.institution,
      Date_of_inspection: formData.doi,
      Tools: formData.tools,
      Methods: formData.methods, 
      Purpose_of_condition_report: formData.purpose_of_condition_report,
      Name_of_client: formData.name_of_client,
     
      Height: formData.height,
      Examination_center: formData.examination_center,
      Platform: formData.platform,
      Behind_glass: formData.behind_glass, 
      Quantity: formData.quantity, 
      Quality: formData.quality, 
      Nature: formData.nature, 
      Ruler: formData.ruler, 
      Microscope: formData.microscope, 
      Camera: formData.camera, 
      Gloves: formData.gloves, 
      Clothing: formData.clothing, 
      Person_present_name: formData.person_present_name,
      Person_present_role: formData.person_present_role,
      Duration_of_assessment: formData.duration_of_assessment,
      Inaccessibility: formData.inaccessibility

     }, 

     Object_identification : {
      
      Identification_no : formData.identification_no,
      Date_of_acquisition : formData.date_of_acquisition,
      Name_of_asset : formData.name_of_asset,
      Title : formData.title,
      Heading : formData.heading,
      Author : formData.author,
      Origin : formData.origin,
      Date_of_creation : formData.date_of_creation,
      Ownership : formData.ownership,
      Protection : formData.protection,
      Summary : formData.summary,
  
     

    }, 

    Object_description : {
      
      Material : formData.material,
      Structure : formData.structure,
      Surface : formData.surface,
      History : formData.history,
      Technique : formData.technique,
      Weight : formData.weight,
      Constituent_elements : formData.contituent_elements,
      No_of_elements : formData.no_of_elements,
      Heights : formData.heights,
      Length : formData.length,
      Width : formData.width,
      Installation_notes : formData.installation_notes,
      Artist_installation_guide : formData.artist_installation_guide,
      Object_creation_description : formData.object_creation_description,

  
     
     } , 

    Object_environment : {
      
      Environment : formData.environment,
      Effect : formData.effect,
    
    }, 

    Conditions_description : {
      
      Info_observed : formData.info_observed,
      Report_change : formData.report_change,
    
    }, 

    Diagnostic_and_recommendations : {
      
      Descriptive_diagnosis : formData.descriptive_diagnosis,
      Recommendations : formData.recommendations,
      Investigations : formData.investigations,
    
    }, 

  });

  /**************************************************************************************/
  
  /******To collect oriinalname from hidden field made inside viewSummary() function and store them in database  */

  ReportForm.Object_description.originalNames = originalNames;

   /******To collect oriinalname from hidden field made inside viewSummary2() function and store them in database  */

  ReportForm.Conditions_description.originalNames = originalNames2;


/******To collect captions from hidden field made inside viewSummary() function  and store them in database  */

  ReportForm.Object_description.captions = captions;

  /******To collect captions from hidden field made inside viewSummary2() function  and store them in database  */

  ReportForm.Conditions_description.captions = captions2;

  
/******To collect images src from hidden field made inside viewSummary() function  and store them in database  */

  //ReportForm.Object_description.images = images;

/******To collect images src from hidden field made inside viewSummary2() function  and store them in database  */

  //ReportForm.Conditions_description.images = images2;




  /*********************Saving in database *********************************************** */
  
  const savedReport = await ReportForm.save();
  const reportDocument = await Report.findById(savedReport._id);
  const mongoDBIDofConstatEtat = savedReport._id.toString(); 



/************************************FILE AND FOLDER SAVING ****************************** */

// Create directory if it doesn't exist
const folderPath = path.join(__dirname, '..', 'uploads', mongoDBIDofConstatEtat);
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Move files to the newly created directory
const moveFiles = (files, destination) => {
  const newPaths = []; // Array to store new paths

  if (!Array.isArray(files)) {     // to handle case when only one fileUpload field is uploaded , not another
    files = [files];
  }


  files.forEach(file => {
    if (file) { // Check if file is defined
    const oldPath = path.join(__dirname, '..', 'uploads', file.filename);
    const newPath = path.join(destination, file.originalname);
    fs.renameSync(oldPath, newPath);
    newPaths.push(newPath); // Push the new path to the array
    }
  });

  return newPaths; // Return the array of new paths
};

const newPaths1 = moveFiles(req.files['ImageFile'], folderPath);
const newPaths2 = moveFiles(req.files['ImageFile2'], folderPath);






/********************************************************************************************* */

const updatedReport = await Report.findByIdAndUpdate(savedReport._id, {
  $set: {
    "Object_description.filePaths": newPaths1,
    "Conditions_description.filePaths": newPaths2
  }
});


 /******************************************************************************************** */

 //console.log(req.files)

  return  res.render('feedback.ejs',   {reportDocument, images, images2})
 
})

/************************************************************************************************************************************ */

module.exports = router; 






