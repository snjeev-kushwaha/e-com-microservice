const express = require('express')


const  {getProducts,addProduct} = require('../controller/product')
const productRouter = express.Router()


productRouter.get("/product",getProducts)
productRouter.post("/add-product",addProduct)


module.exports ={productRouter}