const express = require ("express");
const router = express.Router();
const User = require('../models/users');
const multer = require ('multer');
const fs = require('fs');

//image upload

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)

    },
    });
            var upload = multer({
            storage: storage,
            }).single("image");

//Insert an user int  o database route

router.post('/add', upload, async (req, res)=>{
    const user= new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        
    });
    const res1 = await user.save();
    if(res1)
    res.redirect('/')
});

router.get("/", (req, res) => {
    res.render("C:/Users/ABHISHEK/Desktop/node_crud_app/routes/views/index.ejs", { title: "Home Page"});
});

router.get("/add", (req, res) => {
    res.render("C:/Users/ABHISHEK/Desktop/node_crud_app/routes/views/add_users", {title:"Add Users"})
});
module.exports = router;