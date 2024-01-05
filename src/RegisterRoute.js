// RegisterRoute.js
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const db = require('./DatabaseConnection');
const HttpStatus = require("./HttpStatus");

// Your database configuration and connection

const RegisterRoute = () => async (req, res) => {
    const { username, password, email } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
        await db.query(query, [username, hash, email], (error, results) => {
            if (error) {
                console.error(error);
                let message = HttpStatus.INTERNAL_SERVER_ERROR_500.message;
                if (error.code === 'ER_DUP_ENTRY') message = 'Username already exists!';
                res.status(HttpStatus.INTERNAL_SERVER_ERROR_500.code).json({message: message});
                return;
            }
                res.status(HttpStatus.CREATED_201.code).json({message: 'Successfully Registered!'});
        });
};

module.exports = RegisterRoute;
