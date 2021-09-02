const Product = require('../models/Product')

async function addProduct(req, res) {
    try {
        const {
            name,
            stock,
            price,
            description
        } = req.body

        const product = Product({
            name,
            stock,
            price,
            description
        })

        if(req.file) {
            const { filename } = req.file
            product.setImgUrl(filename)
        }

        const productStored = await product.save()

        res.status(201).send({ productStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

// Por lo general se limitan la cantidad de resultados a mostrar en la consulta
// pero en este caso no se toma en cuenta
async function getProducts(req, res) {
    const products = await Product.find().lean().exec()
    res.status(200).send({ products })
}

module.exports = {
    addProduct,
    getProducts
}