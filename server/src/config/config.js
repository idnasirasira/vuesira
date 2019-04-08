module.exports = {
    port: 8081,
    db: {
        database: 'vuesira',
        user: 'root',
        password: '',
        options: {
            dialect: 'mysql',
            host: 'localhost',
            // storage: './vuesira.sqlite'
        }
    },
    authentication: {
        jwtSecret: 'secret'
    }
}