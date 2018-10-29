const User = require('../models/user');
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var profileRenderPost = function (req, res) {
 let doct = req.user._doc
console.log(doct)

 return res.status(200).json({ user: doct})

 
        
                



};

module.exports = {
    profileRenderPost
};