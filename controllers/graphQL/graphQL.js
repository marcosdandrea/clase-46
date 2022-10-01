const crypto = require('crypto');
const { buildSchema } = require('graphql')
const productServices = require('../products/product.Services')

const schema = buildSchema(`
    type product { 
        productName: String,
        productPrice: Float,
        productID: String
    }
    input productInputNew { 
        productName: String,
        productPrice: Float,
    }
    input productInputEdit { 
        productName: String,
        productPrice: Float,
        productID: String
    }
    type Query{
        getAllProducts: [product]
    }
    type Mutation{
        saveProduct(productName: String, productPrice: Float): product,
        editProduct(productName: String, productPrice: Float, productID: String): product,
        deleteProduct(productID: String): String
    }
`)

const products = new Map()

async function getAllProducts(){
    return Array.from(products.values())
}

function saveProduct(args){
    const { productName, productPrice } = args
    const productID = crypto.randomUUID()
    const product = {productID, productName, productPrice}
    products.set(productID, product)
    return product
}

function editProduct(args){
    const { productName, productPrice, productID } = args
    const product = products.get(productID)
    if (!product) return
    product.productName = productName
    product.productPrice = productPrice
    products.set(productID, product)
    return product
}

function deleteProduct({productID}){
    const product = products.get(productID)
    if (!product) return ("Product not found")
    products.delete(product)
    return "Product Deleted"

}

module.exports = { schema, getAllProducts, saveProduct, editProduct, deleteProduct }