class Setting{
    static index(req, res, next){
        res.render('backend/index', { 
            title: 'Setting', 
            selected: 'setting',
            layout: 'setting' });
    }
}

module.exports = Setting;