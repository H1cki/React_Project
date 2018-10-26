
const User = require('../models/user');
var jwt = require('jsonwebtoken');

var signinPost = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    let userName = request.body.login;
    let userPassword = request.body.password;
    
    User.findOne({ login: userName }, (err, docs) => {

        if (err) {
            console.log(err);
            return response.status(400).json({ message: err.message })
        }
        else if (docs !== null) {
            let password = docs.password;
            if (password == userPassword) {
                let userId = docs._id;
                let token = jwt.sign({ foo: userId }, 'shhhhh');
                console.log(token);
                return response.status(200).json({ token: token,id:userId});
            } else
                return response.status(401).json("expression is not a valid password")

        }
        else {
            return response.status(401).json("user not found")
        }
    });


};



module.exports = {
    signinPost
};


