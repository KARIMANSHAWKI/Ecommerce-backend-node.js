const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db");

// load routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const productRoute = require('./routes/products');
const cartRoute = require('./routes/carts');
const orderRoute = require('./routes/orders');
const paymentRout = require('./routes/stripe');


// load config 
dotenv.config();

// connect to db
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', paymentRout)

// run server
app.listen(process.env.PORT || 5000, () => {
  console.log("server start ....");
});
