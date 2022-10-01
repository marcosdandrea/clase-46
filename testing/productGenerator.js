const {faker} = require('@faker-js/faker/locale/es');
faker.locale = "es"

const get = () => ({
    productName: faker.commerce.product(),
    productBrand: faker.company.name(),
    productCodeNumber: Math.floor(getRandomArbitrary(10000000, 999999999999)),
    productPrice: faker.commerce.price(10, 500),
    productStock: Math.floor(getRandomArbitrary(1, 500)),
})

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = { get }