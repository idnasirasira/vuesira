const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

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
}