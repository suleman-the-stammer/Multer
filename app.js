const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const goodam = multer.diskStorage ({
    destination: function(req, file , cb){
  cb(null, './Public/images/uploads')
    },
    filename: function(req, file , cb){
        crypto.randomBytes(12 ,function(err ,bytes){
            const fn = bytes.toString("hex") + path.extname(file.originalname);
            cb(null, fn)
        })
    }
})

const upload = multer({storage : goodam})
app.post('/upload' , upload.single("images") , function(req, res){
    res.send("File is Uploaded");
})


app.get('/' ,function(req ,res){
    res.render("text");
})

app.listen(3000)