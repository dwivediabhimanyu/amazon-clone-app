const express = require("express");
const { createOrder, paymentCallback } = require("./PaymentController");
const router = express.Router();

router.get("/createOrder", createOrder);
router.get("/callback", paymentCallback);

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
