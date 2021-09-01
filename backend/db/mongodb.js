const mongoose = require('mongoose')

// Al hacerse la conexion envia un mensaje por consola
mongoose.connection.on('open', () => console.log('db connected'))

async function connectDB ({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, { useNewUrlParser: true })
}

module.exports = connectDB