require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const { sendEmail } = require('./controllers/emailController');
const app = express()
app.use(express.json())

// endpoint
app.post('/notify/email', sendEmail)

// MongoDb connection
// mongoose.connect(process.env.MONOG_URI)
mongoose.connect('mongodb://127.0.0.1:27017/email_notification_db')
.then(()=>console.log('Databasse connection successful'))
.catch((err)=> console.log('Database connection failed dure to ', err))


const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Notification service is running on port ${PORT}`)
})