var config = require('./config'),
    express = require('express'),
    userController = require('./controllers/user'),
    bookController = require('./controllers/book')

module.exports = (app) => {
    app.use(config.API_PREFIX + '', rootRoutes())
    app.use(config.API_PREFIX + 'book', bookRoutes())
}

//Routes
function rootRoutes() {
    var router = express.Router()
    router.post('/login', userController.login)
        .post('/register', userController.register)

    return router
}

function bookRoutes() {
    var router = express.Router()
    router.get('/', bookController.listBooks)
        .get('/:id', bookController.getBookById)

    return router
}