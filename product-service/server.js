const express = require('express');
const connectDB = require('./model/dbConnect')
const app = express();
require('dotenv').config();
const port = 'process.env.PORT';
const {productRouter} = require('./route/product');


app.use(express.json())
app.use('/', productRouter);

app.listen(port, () => console.log(`Server is running on ${port}`))