const mongoose = require('mongoose')
const app = require('../app')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    stock: Number,
    price: Number,
    imgUrl: String,
    description: String,
}, {
    timestamps: true
})

ProductSchema.methods.setImgUrl = function setImgUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

// El objeto con el atributo timestamps hace que a las colecciones se les agregue
// de forma automatica su fecha de creacion y la ultima vez que se actualizaron

module.exports = mongoose.model('Products', ProductSchema)