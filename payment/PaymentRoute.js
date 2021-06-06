const express = require("express");
const { createOrder, verifyPayment } = require("./PaymentController");
const router = express.Router();

router.get("/createOrder", createOrder);
router.post("/verifyPayment", verifyPayment);

router.get("/", (req, res) => {
  res.send("hello");
});

module.exports = router;
