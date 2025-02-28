require("dotenv").config(); // include .env file

var mysql = require("mysql2");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dateStrings: true
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;