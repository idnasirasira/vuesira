const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const UsersController = require('./controllers/UsersController')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({
            appName: 'Vuesira',
            appVersion: 'Beta-0.0.1'
        })
    })

    app.post('/register', 
        AuthenticationControllerPolicy.register, 
        AuthenticationController.register)

    app.post('/login', 
        AuthenticationController.login)

    app.get('/songs',
        SongsController.index)

    app.post('/songs',
        SongsController.post)

    /* 
        Users
     */
    app.get('/users',
        UsersController.index)

    app.post('/users',
        UsersController.post)

    app.put('/users',
        UsersController.store)

    app.delete('/users/:id',
        UsersController.delete)

    app.post('/users/datatable',
        UsersController.getDatatable)
}