const request = require("supertest")("http://localhost:3000");
const expect = require("chai").expect
const generator = require("./testing/productGenerator")
let tempProduct

describe("test API REST full", ()=>{
    describe("POST", ()=>{
        it("Debería retornar un ID de producto generado", async()=>{
            let product = generator.get()
            let res = await request.post("/products").send(product)
            expect(res.statusCode).to.eql(200)
            expect(res.body).toString()
        })
    }),
    describe("GET", ()=>{
        it("Debería retornar un array de productos", async()=>{
            let res = await request.get("/products")
            let parsedRes = await JSON.parse(res.text)
            expect(res.statusCode).to.eql(200)
            expect(parsedRes).to.be.an("array")
            tempProduct = parsedRes[parsedRes.length - 1]
        })
    }),
    describe("PUT", ()=>{
        it("Debería retornar Ok", async()=>{
            let res = await request.put("/products").send({...tempProduct})
            let parsedRes = await JSON.parse(res.text)

            expect(res.statusCode).to.eql(200)
            expect(parsedRes).to.be.an("string").eql("Ok")
        })
    }),
    describe("DELETE", ()=>{
        it("Debería retornar Ok", async()=>{
            let res = await request.delete("/products/" + tempProduct.productID)
            let parsedRes = await JSON.parse(res.text)

            expect(res.statusCode).to.eql(200)
            expect(parsedRes).to.be.an("string").eql("Ok")
        })
    })

})