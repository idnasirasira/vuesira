const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

function hashPassword(user, options) {
    const SALT_FACTOR = 8

    console.log('hashPassword')
    
    if(!user.changed('password')) {
        return;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashSync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        full_name: {
            type: DataTypes.STRING
        },
        password: DataTypes.STRING
    },{
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            // beforeSave: hashPassword,
        }
    })

    User.prototype.comparePassword = function (password){
        console.log(password)
        return bcrypt.compare(password, this.password)
    }

    return User
}