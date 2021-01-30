class Produk{
    static index(req, res, next){
        res.render('backend/index', { 
            title: 'Produk', 
            selected: 'produk',
            layout: 'produk' });
    }
}

module.exports = Produk;