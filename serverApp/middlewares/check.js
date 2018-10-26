const User  = require("../models/user");


var signupCheck = (req, res,next) => {
    if (!req.body) return response.sendStatus(400);
    let userName = req.body.login;

User.findOne({ login: userName }, (err, docs) => {

    if (err) {
        console.log(err);
        return res.status(400).json({ message: err.message })
    }
    else if (docs == null) {
    
        next();
    }else {
             return res.status(400).json("err")
    }
    
})

}
module.exports = {
    signupCheck
};
	
