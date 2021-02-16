const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
    return jwt.sign(payload,"SECRET");
}

const verifyToken = (token) => {
    return jwt.verify(token,"SECRET");
}

const isTokenExpired = (exp) => {
    if (Date.now() <= exp * 1000) {
        return false;
    } else {
       return true;
    }
}

module.exports = {generateToken,verifyToken,isTokenExpired}