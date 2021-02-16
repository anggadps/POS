const {verifyToken,isTokenExpired} = require('./Jwt');

module.exports = (req, res, next) =>{
    try{
        if(!req.session.isLogin){
            return res.redirect("/login");
        }  
        const verify = verifyToken(req.session.token);
        isTokenExpired(verify.exp) ? req.session.exp = (new Date().now() + (6 * 60)) : "";
    }catch(err){
       return res.redirect('/login');
    }
    next();
}