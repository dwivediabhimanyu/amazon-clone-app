const Razorpay = require("razorpay");
const { v4: uuidv4 } = require("uuid");
const formidable = require("formidable");
const crypto = require("crypto");

let orderId = "";

var instance = new Razorpay({
  key_id: process.env.ID,
  key_secret: process.env.SECRET,
});

exports.createOrder = (req, res) => {
  var amount = req.query.total * 100;
  var options = {
    amount: amount, // amount in the smallest currency unit
    currency: "INR",
    receipt: uuidv4(),
  };
  if (amount > 0) {
    instance.orders.create(options, function (err, order) {
      if (err) {
        return res.status(500).json({
          error_message: err,
        });
      }
      orderId = order.id;
      res.json({
        status: "Healthy",
        order: order,
      });
    });
  } else {
    res.status(412).json({
      error_message: "Total cannot be 0",
    });
  }
};

exports.paymentCallback = (req, res) => {
  console.log("Here");
  const form = formidable();
  form.parse(req, (err, fields, files) => {
    if (fields) {
      const generated_signature = crypto
        .createHmac("sha256", process.env.SECRET)
        .update(orderId + "|" + fields.razorpay_payment_id)
        .digest("hex");
      console.log(generated_signature === fields.razorpay_signature);
      res.status(200).json({
        message: "All Good!",
      });
    } else {
      res.status(400).json({
        message: "Signature not matched",
      });
    }
  });
};
