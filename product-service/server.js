const express = require('express');
const connectDB = require('./model/dbConnect')
const app = express();
require('dotenv').config();
const port = 'process.env.PORT';
const {productRouter} = require('./route/product');
const config = require('./config/index')

app.use(express.json())
app.use('/', productRouter);

app.listen(config.PORT, () => console.log(`Server is running on ${config.PORT}`))