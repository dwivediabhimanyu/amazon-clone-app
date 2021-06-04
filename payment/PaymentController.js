const Razorpay = require("razorpay");
const { v4: uuidv4 } = require("uuid");

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

exports.paymentCallback = (req, res) => {};
