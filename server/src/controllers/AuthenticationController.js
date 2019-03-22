module.exports = {
    register (req, res) {
        res.send({
            message: `Your account { ${req.body.email} } succesfully registered. Have Fun !`,
        })
    }
}