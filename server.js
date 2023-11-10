import  express  from 'express'
import db from './db/db.js/db.js'
const app = express()

app.use(express.json()) //express vai configurar metodos http na aplicação

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.json({message:'servidor rodando'})
})

const HOST = 'localhost'
const PORT = '5000'

app.listen(PORT, () => {
 console.log(`servidro rodando em : http://${HOST}:${PORT}`)
})