var Sequelize = require('sequelize'),
    fs = require('fs'),
    path = require('path'),
    config = require('./config')

var db = {}
var models = {}

var sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PW, {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

//Load models
const modelsFolder = path.join(__dirname, "models")
fs.readdirSync(modelsFolder).forEach((file) => {
    var pathModel = path.join(modelsFolder, file)
    var model = sequelize.import(pathModel)
    models[model.name] = model
    console.log(`Import models: ${model.name}`)
})

//Do associate modele
Object.keys(models).forEach((modelName) => {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models)
    }
})

db.Sequelize = Sequelize
db.sequelize = sequelize
db.models = models

module.exports = db