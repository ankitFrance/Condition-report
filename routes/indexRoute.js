const express = require('express');
const router = express.Router();
const multer  = require('multer')


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

router.post('/upload', uploadMiddleware.single('ImageFile'), (req, res)=>{
    console.log(req.body)
    console.log(req.file)
    return res.redirect('/')
})




module.exports = router; 