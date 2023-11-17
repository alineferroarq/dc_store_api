import { Sequelize } from "sequelize";
import { DB_CONFIG } from "../config/config.js";

 

export const connection = new Sequelize(DB_CONFIG.db, 
    DB_CONFIG.user, 
    DB_CONFIG.pass, 
    {
    host: 'localhost',
    dialect: DB_CONFIG.dialect,
    pool: {
        max: 5, //máximo de conexões suportadas
        min: 0, //mínimo de conexões suportadas
        acquire: 30000, //tempo máximo em ms(milisegundos) que o pool tenta conectar antes de gerar o erro
        idle: 10000 //tempo máximo em ms(milisegundos) que a conexão pode ser confirmada antes de ser estabelecida
    }
});

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
   