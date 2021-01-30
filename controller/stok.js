class Stok{
    static index(req, res, next){
        res.render('backend/index', { 
            title: 'Stok', 
            selected: 'stok',
            layout: 'stok' });
    }
}

module.exports = Stok;