const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    stock: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String,
}, {
    timestamps: true
})

// El objeto con el atributo timestamps hace que a las colecciones se les agregue
// de forma automatica su fecha de creacion y la ultima vez que se actualizaron

module.exports = mongoose.model('Products', ProductSchema)