const Joi = require('joi')

const schema = Joi.object({
    productName: Joi.string().required(),
    productBrand: Joi.string().required(),
    productCodeNumber: Joi.number().min(10000000).max(999999999999).required(),
    productPrice: Joi.number().required(),
    productStock: Joi.number().required(),
    productID: Joi.string()
})


module.exports = { schema }