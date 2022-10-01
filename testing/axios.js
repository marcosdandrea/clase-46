const axios = require('axios')
const baseURL = "http://localhost:3000"
let errors = []

async function postMethod() {
    const endpoint = "/products"
    const method = "post"
    const data = {
        productName: "cocaCola Classic",
        productBrand: "Coca-Cola",
        productCodeNumber: 100000050,
        productPrice: 152.24,
        productStock: 1000
    }
    try {
        const res = await axios({ method, url: baseURL + endpoint, data })
        console.log({ endpoint, method, status: "passed" })
        return (res)
    } catch (err) {
        errors.push({ endpoint, method, err: err.message })
    }
}

async function getMethod() {
    const endpoint = "/products"
    const method = "get"
    try {
        const res = await axios({ method, url: baseURL + endpoint })
        console.log({ endpoint, method, status: "passed" })
        return (res)
    } catch (err) {
        errors.push({ endpoint, method, err: err.message })
    }
}

async function putMethod(id) {
    const endpoint = "/products"
    const method = "put"
    const data = {
        productName: "cocaCola Classic",
        productBrand: "Coca-Cola",
        productCodeNumber: 100000050,
        productPrice: 152.24,
        productStock: 10,
        productID: id
    }
    try {
        const res = await axios({ method, url: baseURL + endpoint, data })
        console.log({ endpoint, method, status: "passed" })
    } catch (err) {
        errors.push({ endpoint, method, err: err.message })
    }
}

async function deleteMethod(id) {
    const endpoint = "/products"
    const method = "delete"
    try {
        const res = await axios({ method, url: baseURL + endpoint + "/" + id })
        console.log({ endpoint, method, status: "passed" })
    } catch (err) {
        errors.push({ endpoint, method, err: err.message })
    }
}

async function startTest() {
    const resID = await postMethod()
    await getMethod()
    await putMethod(resID.data)
    await deleteMethod(resID.data)
    console.error(errors)
}

startTest()