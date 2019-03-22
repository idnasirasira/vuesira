const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({
            appName: 'Vuesira',
            appVersion: 'Beta-0.0.1'
        })
    })

    app.post('/register', AuthenticationController.register)
}