const DAO = require("./products.DAO.memory.js")

async function getAllProducts(context) {
    try{
        const products = await DAO.getAllProducts()
        context.body = JSON.stringify(products)
    }catch(err){
        context.status = 500
        context.body = JSON.stringify(err.message)
    }
}

async function saveProduct(context) {
    try{
        const product = context.request.body
        const ans = await DAO.saveProduct(product)
        context.body = JSON.stringify(ans)
    }catch(err){
        context.status = 500
        context.body = JSON.stringify(err.message)
    }
}

async function editProduct(context) {
    try{
        const product = context.request.body
        const ans = await DAO.editProduct(product)
        context.body = JSON.stringify(ans)
    }catch(err){
        context.status = 500
        context.body = JSON.stringify(err.message)
    }
}

async function deleteProduct(context) {
    try{
        const id = context.params.id
        const ans = await DAO.deleteProduct(id)
        context.body = JSON.stringify(ans)
    }catch(err){
        context.status = 500
        context.body = JSON.stringify(err.message)
    }
}




module.exports = { getAllProducts, saveProduct, editProduct, deleteProduct}