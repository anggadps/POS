var express = require('express');
var router = express.Router();
const Dashboard = require('../controller/Dashboard');
const Login = require('../controller/Login');
const Users = require('../controller/Users');
const authentication = require('../helpers/authentication');

/* GET home page. */
router.get('/',authentication, Dashboard.index);
router.get('/login', Login.index);
router.post('/login', Login.auth);
router.get('/generate', Users.generateUsers);
router.get('/logout',function(req,res,next){
    req.session = null;
    res.redirect('/login');
});



module.exports = router;
