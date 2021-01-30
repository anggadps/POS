var express = require('express');
var router = express.Router();
const Dashboard = require('../controller/Dashboard');

/* GET home page. */
router.get('/', Dashboard.index);



module.exports = router;
