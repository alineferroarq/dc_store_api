import  express  from 'express'
import db from './model/index.js'
import { routerProduto } from './routes/produto.routes.js'
import cors from "cors"


const app = express()

app.use(cors())

app.use(express.json()) //express vai configurar metodos http na aplicação

app.use(express.urlencoded({extended: true}))

db.connection.sync()
.then(() => {
    console.log('drop and re-sync db');
})
.catch((err) => {
        console.log('Failed to sync db.' + err.message);
    })
app.get('/', (req, res) => {
    res.json({message:'servidor rodando'})
})
routerProduto(app)

const HOST = 'localhost'
const PORT = '5000'

app.listen(PORT, () => {
 console.log(`servidro rodando em : http://${HOST}:${PORT}`)
});