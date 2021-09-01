const express = require('express')
const productRoutes = require('./routes/product')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1', productRoutes)

module.exports = app