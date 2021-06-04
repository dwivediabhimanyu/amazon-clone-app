const express = require("express");
const { createOrder, paymentCallback } = require("./PaymentController");
const router = express.Router();

router.get("/createOrder", createOrder);
router.post("/callback", paymentCallback);

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
