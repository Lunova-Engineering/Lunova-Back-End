const jwt = require('jsonwebtoken');
const HttpStatus = require("./HttpStatus");
const secretKey = 'b22f5d4ebea0f50170ffd00cee15a8d62561a23999c9a0ee0c1c583ace99179894d9a759a1d42a2f03952df740de661e7ddcdb1dc7cf79c6a16366297ab3ed3e';

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) return res.sendStatus(HttpStatus.UNAUTHORIZED_401.code).json({message: HttpStatus.UNAUTHORIZED_401.message}); // if no token found

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // if token is not valid
        req.user = user;
        next();
    });
};

module.exports = authenticate();