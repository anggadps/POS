class Report{
    static index(req, res, next){
        res.render('backend/index', { 
            title: 'Report', 
            selected: 'report',
            layout: 'report' });
    }
}

module.exports = Report;