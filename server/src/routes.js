module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({
            appName: 'Vuesira',
            appVersion: 'Beta-0.0.1'
        })
    })

    app.post('/register', (req, res) => {
        res.send({
            message: `Your account { ${req.body.email} } succesfully registered. Have Fun !`,
        })
    })
}