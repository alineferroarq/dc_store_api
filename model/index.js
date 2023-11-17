import { Sequelize } from "sequelize"
import { produtoModel } from "./produto.model.js"
import { connection } from "../db/db.js/db.js"

const db = {}

  db.Sequelize = Sequelize
  db.connection = connection
  db.produto = produtoModel(connection)

  export default db