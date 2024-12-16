const express = require('express');
const app = express();

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.post('/upload' , function(req, res){
    
})


app.get('/' , function(req ,res){
    res.render("text");
})

app.listen(3000)