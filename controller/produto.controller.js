import db from "../model/index.js"

const Produto = db.produto
export const produtoController = {
// salva o produto
create: (req, res) => {
    if(!req.body.nome) {
        res.status(400).send({
            message: 'o nome não pode ser vazio'
    })
    }
    const {nome, categoria, descricao, desconto, precoAntes, precoDepois, ativo } = req.body
    const produto = {nome, categoria, descricao, desconto, precoAntes, precoDepois, ativo}
    Produto.create(produto)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: e.message || 'ocorreu um erro ao salvar o produto'
        })
    })
},
findAll: (req, res) => {
    Produto.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: e.message || 'ocorreu um erro ao procurar o produto'
        })
    })
},
findById: (req, res) => {
    const id = req.params.id
    Produto.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(e => {
        res.status(500).send({
            message: e.message || `ocorreu um erro ao procurar o produto de id: ${id}`
        });
    });
},
findByStatus: (req, res) => {
    
},
update: (req, res) => {
    
},
deleteById: (req, res) => {
    
},
deleteAll: (req, res) => {
    
},
}
