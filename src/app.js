import express from "express"
import morgan from "morgan"
import pkg from "../package.json"
import productsRoutes from './routes/products.routes'

const app = express()
app.use(morgan('dev'))

app.set('pkg', pkg)

app.get("/",(req,res) =>{
    res.json({
        author: app.get('pkg').name
    })
})

app.use('/products',productsRoutes)

export default app