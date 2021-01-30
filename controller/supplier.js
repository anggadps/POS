class Supplier{
    static index(req, res, next){
        res.render('backend/index', { 
            title: 'Supplier', 
            selected: 'supplier',
            layout: 'supplier' });
    }
}

module.exports = Supplier;