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
    },
    development: {
        username: "root",
        password: null,
        database: "vuesira",
        host: "127.0.0.1",
        dialect: 'mysql'
    },
    test: {
        username: "root",
        password: null,
        database: "vuesira",
        host: "127.0.0.1",
        dialect: 'mysql'
    },
    production: {
        username: "root",
        password: null,
        database: "vuesira",
        host: "127.0.0.1",
        dialect: 'mysql'
    }
}