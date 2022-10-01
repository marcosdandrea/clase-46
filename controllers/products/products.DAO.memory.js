const crypto = require('crypto')
let memory = []

async function getAllProducts() {
    if (memory.length == 0) throw new Error("There's no items")
    return memory
}

async function saveProduct(product) {
    if (!product) throw new Error("Invalid product data")
    product.productID = crypto.randomUUID()
    memory.push (product)
    return product.productID
}

async function editProduct(product) {
    if (!product) throw new Error("Invalid product data")
    const index = memory.findIndex (item => item.productID === product.productID)
    if (index == -1) throw new Error("Item not found")
    memory[index] = {...product}
    return product.productID
}

async function deleteProduct(id) {
    const index = memory.findIndex (item => item.productID === id)
    if (index == -1) throw new Error("Item not found")
    memory.splice(index, 1)
    return "product deleted successfully"
}



module.exports = { getAllProducts, saveProduct, editProduct, deleteProduct}