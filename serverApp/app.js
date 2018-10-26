var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var ejs = require('ejs')
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var multer = require('multer')
var upload = multer({ dest: 'public/uploads/' })
var cookieParser = require('cookie-parser')
// var { mainCtrl } = require("./mainCtrl/mainController");
var { checkAuth } = require("./middlewares/Auth")
var { signupCheck } = require("./middlewares/check")
var { signinPost } = require("./mainCtrl/signinController");
var {  signupPost } = require("./mainCtrl/signupController");
// var { usersListGet } = require("./mainCtrl/usersListController");
var { profilePost  } = require("./mainCtrl/profileController");
// var { sortGet } = require("./mainCtrl/sortContoller");
var mongoose = require("mongoose");
const cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersdb");


// создаем парсер для данных в формате json
app.use(cors({
    origin: 'http://localhost:3003',
    credentials: true
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + "/public")
app.set('view engine', 'ejs');
app.post("/api/signin", signinPost)
app.post("/api/signup", signupCheck, signupPost);

app.post("/profile", checkAuth, upload.single('avatar'), profilePost);

app.listen(3000);