module.exports = {
    port: 8081,
    db: {
        database: 'vuesira',
        user: 'vuesira',
        password: 'vuesira',
        options: {
            dialect: 'sqlite',
            host: 'localhost',
            storage: './vuesira.sqlite'
        }
    }
}