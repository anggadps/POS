const express = require('express');
const router = express.Router();
const Report = require('../controller/Report');

router.get('/', Report.index);

module.exports = router;