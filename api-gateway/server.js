const express = require('express')
const cors = require('cors')
require('dotenv').config()
const config = require('./config/index')
const app = express()
app.use(express.json())
app.use(cors())
const userRoutes = require('./routes/user-route')

userRoutes(app)


app.listen(config.PORT, () => {
    console.log(`server started on port ${config.PORT}`)
})