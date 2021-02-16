const DbQuery = require('../helpers/DbQuery');
const { encrypt } = require('../helpers/bcrypt');
class Users {
    static index(req, res, next) {
        res.send("Ini Setting");
    }

    static async generateUsers(req, res, next) {
        const user = {
            fullname: "angga",
            email: "angga@angga.com",
            password: encrypt("12345"),
            user_level_id: 1,
            is_active: 1
        };
        const insert = await DbQuery.InsertQuery({ table: "users", data: user });
        if (insert.insertId > 0) {
            console.log("Success");
        } else {
            console.log("Error");
        }
        res.json(insert);
    }
}

module.exports = Users;