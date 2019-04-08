const { User } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const users = await User.findAll({
                limit: 10
            })
            res.send(users)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: `An error has occured trying to fetch the users`,
            })
        }
    },
    async post(req, res) {
        try {
            const users = await User.create(req.body)
            res.send(users.toJSON())
        } catch (err) {
            res.status(400).send({
                error: `An error has occured trying to save the users`,
            })
        }
    },
    async store(req, res) {
        try {
            const users = await User.create(req.body)
            res.send(users.toJSON())
        } catch (err) {
            res.status(400).send({
                error: `An error has occured trying to save the users`,
            })
        }
    },
    async delete(req, res) {
        console.log(req.params)
        try {
            const deleteUser = await User.destroy({
                where: {
                    id: req.params.id
                }
            })

            if (deleteUser) {
                res.send({
                    param: `success`,
                    messages: `User deleted.`
                })
            }else{
                res.send({
                    param: `success`,
                    messages: `Failed to delete the user.`,
                })
            }
        } catch (err) {
            res.status(400).send({
                error: `An error has occured trying to delete the user`,
            })
        }
    },
    async getDatatable(req, res) {
        console.log(req.body)
        
        try {
            const offset = (req.body.page-1) * req.body.rowsPerPage
            const limit = req.body.rowsPerPage
            const sortBy = req.body.sortBy
            const sort = (req.body.descending) ? "DESC" : "ASC"

            const users = await User.findAndCountAll({ 
                limit: limit,
                offset: offset,
                order: [
                    [sortBy, sort]
                ]
            })
            
            res.send(users)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: `An error has occured trying to get the users`,
            })
        }
    }
}