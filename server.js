require("dotenv").config();
const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const PaymentRoute = require("./payment/PaymentRoute");
const app = express();
app.use(cors());

app.use("/api", PaymentRoute);

app.listen(5000, () => {
  console.log("Server Started @ localhost:5000");
});
