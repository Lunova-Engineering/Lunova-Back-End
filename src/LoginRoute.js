const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const HttpStatus = require("./HttpStatus");
const secretKey = 'b22f5d4ebea0f50170ffd00cee15a8d62561a23999c9a0ee0c1c583ace99179894d9a759a1d42a2f03952df740de661e7ddcdb1dc7cf79c6a16366297ab3ed3e';
const crypto = require('crypto');
const db = require('./DatabaseConnection');

const LoginRoute = () => async (req, res) => {
        const {username, password} = req.body;
        const query = 'SELECT * FROM users WHERE username = ?';
        await db.query(query, [username], async (err, result) => {
            if(err) {
                console.error(err);
                res.status(HttpStatus.INTERNAL_SERVER_ERROR_500.code).json({message: HttpStatus.INTERNAL_SERVER_ERROR_500.message});
                return;
            }
            if (result[0].length === 0) {
                res.status(HttpStatus.BAD_REQUEST_400.code).json({message: 'Invalid credentials!'});
                return;
            }
            const user = result[0][0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                const token = jwt.sign({
                    id: user.id,
                    username: user.username,
                    email: user.email
                }, secretKey, {expiresIn: '24h'});
                const refreshToken = crypto.randomBytes(64).toString('hex');
                const insertRefreshToken = 'UPDATE users SET refresh_token = ? WHERE id = ?';
                await db.query(insertRefreshToken, [refreshToken, user.id], function (err, result) {
                    if(err) {
                        res.status(HttpStatus.INTERNAL_SERVER_ERROR_500.code).json({message: HttpStatus.INTERNAL_SERVER_ERROR_500.message});
                    }
                });
                console.log("Successfully logged in!");
                res.status(HttpStatus.OK_200.code).json({message: 'Logged in successfully', token: token});
            } else {
                res.status(HttpStatus.BAD_REQUEST_400.code).json({message: 'Invalid credentials!'});
            }

        });
};

module.exports = LoginRoute;
