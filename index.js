const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require('./routes/auth')

dotenv.config();


mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log("database connection start ....");
  })
  .catch((err)=> console.log({error: err}));

app.use(express.json());

//  ROUTES
app.use('/api/auth', authRoute);



app.listen(process.env.PORT || 5000, () => {
  console.log("server start ....");
});
