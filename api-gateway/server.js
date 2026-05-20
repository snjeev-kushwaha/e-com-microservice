const express = require('express')
require('dotenv').config()
const config = require('./config/index')
const app = express()
app.use(express.json())






app.listen(config.PORT, () => {
    console.log(`server started on port ${config.PORT}`)
})