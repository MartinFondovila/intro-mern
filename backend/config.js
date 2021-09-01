// En este archivo van a estar las variables de nuestra configuracion
const config = {
    appConfig: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT
    },
    dbConfig: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbName: process.env.DB_NAME
    }
}

module.exports = config
