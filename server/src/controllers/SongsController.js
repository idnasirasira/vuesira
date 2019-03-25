const { Songs } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const songs = await Songs.findAll({
                limit: 10
            })
            res.send(songs)
        } catch (err) {
            console.log(err)
            res.status(400).send({
                error: `An error has occured trying to fetch the songs`,
            })
        }
    }, 
    async post(req, res) {
        try {
            const songs = await Songs.create(req.body)
            res.send(songs.toJSON())
        } catch (err) {
            res.status(400).send({
                error: `An error has occured trying to save the songs`,
            })
        }
    },
}