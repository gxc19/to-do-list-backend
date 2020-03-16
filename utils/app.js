const mysql = require('mysql')
const {promisify} = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "joinus"
})

const promisifiedQuery = promisify(connection.query).bind(connection)