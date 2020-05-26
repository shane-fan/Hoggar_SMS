const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
})

// Create User Table if not already exist
const sql = `
CREATE TABLE IF NOT EXISTS Users (
  email VARCHAR(50) PRIMARY KEY,
  password VARCHAR(20) NOT NULL
)`
connection.query(sql, (error, results, fields) => {
  if (error) throw error
})
module.exports = connection
