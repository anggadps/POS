const express = require('express');
const router = express.Router();
const Supplier = require('../controller/Supplier');

router.get('/', Supplier.index);

module.exports = router;