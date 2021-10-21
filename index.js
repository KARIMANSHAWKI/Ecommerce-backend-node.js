const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:191998kokii@ecommerce.tioz4.mongodb.net/ecommerce?retryWrites=true&w=majority")
  .then(() => {
    console.log("database connection start ....");
  })
  .catch((err)=> console.log(err));

app.listen(3000, () => {
  console.log("server start ....");
});
