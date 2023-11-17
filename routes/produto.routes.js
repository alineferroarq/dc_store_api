import express from "express"
import { produtoController } from "../controller/produto.controller.js"

export const routerProduto = (app) => {
    
    //salva um novo produto no db

    const router = express.Router()
    router.post ('/', produtoController.create)
    ///buscar todos os produtos
    router.get ('/', produtoController.findAll)
    //buscar por id
    router.get ('/:id', produtoController.findById)
    //buscar pelo status
    router.get ('/:status', produtoController.findByStatus)
    //atualizar um produto
    router.put ('/:id', produtoController.update)
    //deletar um produto
    router.delete ('/:id', produtoController.deleteById)
    //deletar todos os produtos
    router.delete ('/', produtoController.deleteAll)

    app.use('/api/produto', router)

    }
