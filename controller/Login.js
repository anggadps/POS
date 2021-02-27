const db = require('../config/Database');
const DbQuery = require('../helpers/DbQuery');
const {generateToken} = require('../helpers/jwt');
const {decrypt} = require('../helpers/bcrypt');

class Login {
    static index(req, res, next) {
        const alert = req.flash("error");
        if(req.session.isLogin){
            return res.redirect('/');
        }
        res.render('frontend', {
            title: 'Form Login',
            isAlert: alert 
        });
    }

    static async auth(req, res, next) {
        let response = {};
        const { email, password } = req.body;
        const getData = await DbQuery.SelectQuery({
            table: "users",
            where:{
                email:email
            }
        });
        
        if (getData.length > 0) {
            const verify = decrypt(password,getData[0].password);
            if(verify){
                const payload = {
                    id: getData[0].id,
                    fullname: getData[0].fullname,
                    email: getData[0].email,
                    user_level_id: getData[0].user_level_id,
                    exp:Date.now() + (60*60) // 60 detik *60
                }
                const token = generateToken(payload);
                req.session.isLogin = true;
                req.session.token = token;
                req.session.payload = payload;
                response.status = "Success";
                response.message = "Login Success";
                response.token = token;
            }else{
                response.status = "Error";
                response.message = "Password Salah!";
                response.email = req.body.email;
            }

        } else {
            response.status = "Error";
            response.message = "Email Salah!";
            response.email = req.body.email;
        }
        
        req.flash("error", response);
        if(response.status == "Success"){
            res.redirect('/');
        }else{
            res.redirect('/login');
        }

    }
}

module.exports = Login;