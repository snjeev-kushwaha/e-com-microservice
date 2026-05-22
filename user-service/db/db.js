const { MongoClient } = require('mongodb');
const config = require('../config/index')
const client = new MongoClient(config.MONGO_URI);

let db;

async function connectDB() {

    await client.connect();

    db = client.db('auth_db');

    console.log('Auth DB Connected');
}

function getDB() {
    return db;
}

module.exports = {
    connectDB,
    getDB
}; 