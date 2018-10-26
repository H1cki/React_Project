const User = require('../models/user');
var signupPost = (req, res) => {
    if (!req.body) return response.sendStatus(400);
    let userName = req.body.login;
    let userPassword = req.body.password;
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let age = req.body.age

  User.create({
                firstName: firstName,
                lastName: lastName,
                login: userName,
                password: userPassword,
                Age:age
            }, function (err, doc) {
                if (err) return console.log("err:",err);
                console.log("Сохранен объект user", doc);
                return res.status(200).json("sdsdfs")
                //  return res.redirect("/");
            });



}



module.exports = {
    signupPost
};