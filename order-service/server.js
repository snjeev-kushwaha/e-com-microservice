const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


// IMPORT ROUTES
const orderRoutes = require("./routes/orderRoutes");


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api/orders", orderRoutes);



// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`);
});