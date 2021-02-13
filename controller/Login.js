class Login{
    static index(req, res, next){
        res.render('frontend', { 
        title: 'Form Login'
    });
    }

    static auth(req,res,next){
        const{email,password} = req.body;
        res.json({email:email,password:password});
    }
}

module.exports = Login;