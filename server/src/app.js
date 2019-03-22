console.log('hello')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send({
        appName: 'Vuesira',
        appVersion: 'Beta-0.0.1'
    })
})

app.listen(8081)
