const mysql = require('mysql2/promise');

class Database {
    constructor(config) {
        this.connection = mysql.createPool(config);
    }

    async query(sql, params, callback) {
        this.connection.query(sql, params)
            .then(results => callback(null, results))
            .catch(error => callback(error, null));
    }
}

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'lunova_db'
};

const db = new Database(dbConfig);

module.exports = db;
