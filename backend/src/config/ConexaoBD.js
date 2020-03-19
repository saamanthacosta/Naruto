const mysql = require('mysql');

// iniciar a conexão
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'naruto'
});