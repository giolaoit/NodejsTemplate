var express = require('express'),
    config = require('./config'),
    orm = require('./orm'),
    bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//router
require('./router')(app)

orm.sequelize.sync({ force: false }).then(() => {
    app.listen(config.APP_PORT)
    console.log(`Service running at port: ${config.APP_PORT} `)
})