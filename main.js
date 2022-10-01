require("dotenv").config()
const koa = require ("koa")
const koaBody = require("koa-body")
const router = require("koa-router")

const app = new koa()
app.use (koaBody())

const productsAPI = require('./controllers/products/products.API')

const productRouter = router ({
    prefix: '/products'
})

productsAPI.config(productRouter)

app.use(productRouter.routes())

app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT)
})
