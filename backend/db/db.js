const mysql = require('mysql2');
require('dotenv').config();

const config = require('../config/config');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
});

module.exports = pool;
