import 'dotenv/config'

//console.log(process.env.HOST)

export const DB_CONFIG = {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    pass: process.env.PASS,
    db: process.env.DB,
    dialect: process.env.DIALECT,
 }