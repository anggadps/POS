class Dashboard{
    static index(req, res, next){
        res.render('backend/index', { 
        title: 'Dashboard', 
        selected: 'dashboard',
        layout: 'dashboard' });
    }
}

module.exports = Dashboard;