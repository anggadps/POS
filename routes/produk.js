const express = require('express');
const router = express.Router();
const Produk = require('../controller/Produk');

router.get('/', Produk.index);

module.exports = router;