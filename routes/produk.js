const express = require('express');
const router = express.Router();
const Produk = require('../controller/Produk');

router.get('/', Produk.index);
router.post('/add', Produk.add);

router.get('/getAll',Produk.getAll);

router.get('/get/:id',Produk.getById);

module.exports = router;