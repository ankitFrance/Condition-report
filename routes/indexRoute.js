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
      
    }
   
   
  });
  console.log(formData.name)
  await ReportForm.save();




    console.log(req.files['ImageFil'])
    return res.redirect('/')
})






module.exports = router; 