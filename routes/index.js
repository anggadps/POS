var express = require('express');
var router = express.Router();
const Dashboard = require('../controller/Dashboard');
const Login = require('../controller/Login');

/* GET home page. */
router.get('/', Dashboard.index);
router.get('/login', Login.index);
router.post('/login', Login.auth);



module.exports = router;
