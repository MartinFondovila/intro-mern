// Este archivo se encarga de inicializar el servidor
require('dotenv').config()
const app = require('./app')
const connectDb = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')

// Esta funcion se asegura de que se realice la conexion con la base de datos de forma exitosa
// antes de levantar el servidor
async function initApp (appConfig, dbConfig) {
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`Listen on ${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)
// El puerto harcodedado es un problema porque en el entorno de desarrollo voy
// a querer que sea uno y en el de produccion otro

// Es buena practica hacer una guia de estilos en nuestro codigo
// Se instalan las dependencias standard (para detectar errores), 
// nodemon (para actualizar el server al guardar cambios)
// dotenv para utilizar el archivo .env y no tener hardcodedado en port
// mongoose para facilitar la conexion y manejo de la base de datos
// body-parser Ya esta deprecada, ahora se utiliza express
// multer maneja el almacenamiento de las imagenes

// Buscar que son las funciones async / await

