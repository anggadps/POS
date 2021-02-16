const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const produkRouter = require('../routes/produk');
const reportRouter = require('../routes/report');
const settingRouter = require('../routes/setting');
const supplierRouter = require('../routes/supplier');
const stokRouter = require('../routes/stok');
const authentication = require('../helpers/authentication');

const MainRouter = (app) => {
    app.use('/', indexRouter);
    app.use(authentication);
    app.use('/users', usersRouter);
    app.use('/produk', produkRouter);
    app.use('/report', reportRouter);
    app.use('/setting', settingRouter);
    app.use('/supplier', supplierRouter);
    app.use('/stok', stokRouter);

}

module.exports= MainRouter;