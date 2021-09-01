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

module.exports = {
    addProduct
}