const express = require('express');
const router = express.Router();
const multer  = require('multer')
const Report = require('../model/report')
const fs = require('fs');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    /*
    filename: function (req, file, cb) {
      const a = req.body;
      return cb(null, `${a.name}-${file.originalname}`)
    }
    */
  })
  
  const uploadMiddleware = multer({ storage })                            //middleware




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
    parsedNormalUserMongoDBid: parsedNormalUserMongoDBid
  });
 

});

router.post('/feedback', uploadMiddleware.array('ImageFile', 5), async(req, res)=>{
   
  const formData = req.body;

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
    
    }
   
  });


  console.log(formData)
  const savedReport = await ReportForm.save();
  const mongoDBIDofConstatEtat = savedReport._id.toString(); 

  req.files.forEach(file => {

    const filename = `${mongoDBIDofConstatEtat}-${file.originalname}`;
    fs.renameSync(file.path, path.join(file.destination, filename));
   
});

  console.log(req.files)
  return  res.render('feedback.ejs',   {formData})
 
})


module.exports = router; 