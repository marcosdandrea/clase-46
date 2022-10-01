const services = require("./product.Services.js")

function config (app){

    app.get('/', 
        services.getAllProducts
        )

    app.post('/', 
        services.saveProduct
        )

    app.put('/', 
        services.editProduct
        )

    app.delete('/:id', 
        services.deleteProduct
        )

}

module.exports = { config }