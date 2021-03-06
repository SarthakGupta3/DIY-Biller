const express = require('express')
var mysql = require('mysql');
var bodyParser = require('body-parser')
const cors = require('cors');

var app = express()
app.use(cors());

const user_routes = require('./routes/users')
const inventory_routes = require('./routes/inventory')
const sale_routes = require('./routes/sale')
const employee_routes = require('./routes/employee')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1qaz2wsx',
//     database: 'diybiller'
// });

// connection.connect()


app.use('/user', user_routes)
app.use('/inventory', inventory_routes)
app.use('/sale', sale_routes)
app.use('/employee', employee_routes)

app.get('/', (req, res) => {
    res.send('Works')
})

app.listen(4000, () => console.log('Port Up.'))