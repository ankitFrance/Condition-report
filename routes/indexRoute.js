const express = require('express');
const router = express.Router();
const multer  = require('multer')
const Report = require('../model/report')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const uploadMiddleware = multer({ storage })                            //middleware


router.get('/', (req, res)=> {
    res.render('index')
})




router.post('/feedback', uploadMiddleware.fields([{ name: 'ImageFile'}, { name: 'ImageFil'}]), async(req, res)=>{
   
  const formData = req.body;

  const ReportForm = new Report({

    Reporting_Information : {

      Name: formData.name,
      Role: formData.role,
      Qualification: formData.qualification,
      Date_of_inspection: formData.date_of_inspection,
      Tools: formData.tools,
      Methods: formData.methods, 
      Purpose_of_condition_report: formData.purpose_of_condition_report,
      Name_of_client: formData.name_of_client,
      Reliability: formData.reliability, 
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
      Constituent_elements : formData.constituent_elements,
      No_of_elements : formData.no_of_element,
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
  await ReportForm.save();

  console.log(req.files['ImageFil'])
  //return res.redirect('/')
  return  res.render('feedback.ejs')
})






module.exports = router; 