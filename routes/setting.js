const express = require('express');
const router = express.Router();
const Setting = require('../controller/Setting');

router.get('/', Setting.index);

module.exports = router;