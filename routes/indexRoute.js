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
     

    }
   
   
  });
  console.log(formData)
  await ReportForm.save();




    console.log(req.files['ImageFil'])
    return res.redirect('/')
})






module.exports = router; 