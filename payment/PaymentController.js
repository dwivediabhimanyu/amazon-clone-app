const Razorpay = require("razorpay");
const { v4: uuidv4 } = require("uuid");
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

exports.verifyPayment = (req, res) => {
  console.log(req.body);
  if (req.body.paymentId && req.body.signature) {
    // TODO : Fix Issue Hash not macthing
    const generated_signature = crypto
      .createHmac("sha256", process.env.SECRET)
      .update("order_HJMlwn1gqorIRB" + "|" + req.body.paymentId)
      .digest("hex");
    console.log(generated_signature === req.body.signature);
    res.status(200).json({
      isValid: true,
    });
  } else {
    res.status(400).json({
      isValid: false,
    });
  }
};
