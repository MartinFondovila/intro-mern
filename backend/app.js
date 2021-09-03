const express = require('express')
const cors = require('cors')
const productRoutes = require('./routes/product')

const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1', productRoutes)

module.exports = app