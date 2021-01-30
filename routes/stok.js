const express = require('express');
const router = express.Router();
const Stok = require('../controller/Stok');

router.get('/', Stok.index);

module.exports = router;