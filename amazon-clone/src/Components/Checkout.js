import React, { useState, useEffect } from "react";
import "./Checkout.css";
import CartItem from "./CartItem";
import { useStateValue } from "../StateProvider";
import axios from "../axios";
import { useHistory } from "react-router-dom";
import { getBasketTotal, getUserId } from "../store/reducer";
import { db } from "../firebase";
import firebase from "firebase";
import CurrencyFormat from "react-currency-format";
function Checkout() {
  const [{ user, basket }, dispatch] = useStateValue();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [processing, setProcessing] = useState("");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const getClientKey = async () => {
      const res = await axios({
        method: "GET",
        url: `/createOrder?total=${getBasketTotal(basket)}`,
      });
      setOrderId(res.data.order.id);
    };
    if (getBasketTotal(basket) > 0) {
      setDisabled(false);
      getClientKey();
    } else {
      setDisabled(true);
      console.log("Basket Empty!");
    }
  }, [basket]);

  useEffect(() => {
    let src = "https://checkout.razorpay.com/v1/checkout.js";
    let script = document.createElement("script");
    script.src = src;
    script.async = true;
    const onScriptLoad = () => {
      console.log("Script Loaded");
    };
    script.addEventListener("load", onScriptLoad);
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  };

  useEffect(() => {
    if (processing) {
      const options = {
        key: process.env.REACT_APP_RP_ID,
        amount: `${getBasketTotal(basket).toString()}`,
        currency: "INR",
        name: "Amazon Clone",
        description: "Payment for your  fake order.",
        image: "http://pngimg.com/uploads/amazon/amazon_PNG27.png",
        order_id: `${orderId}`,
        handler: function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          console.log("A: ", response);
          updateToDatabase(response);
        },
        prefill: {
          name: "Amazon Clone LLC",
          email: "clone.amazon@fake.com",
          contact: "9999999999",
        },
        theme: {
          color: "#f0c14b",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      paymentObject.on("payment.failed", function (response) {
        setError(response.error.reason);
      });
    }
  }, [orderId, processing]);

  const updateToDatabase = (response) => {
    const total = getBasketTotal(basket);
    console.log("B :", response);
    console.log(total);
    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(response.razorpay_payment_id)
      .set({
        basket: basket,
        amount: total,
        orderId: response.razorpay_order_id,
        signature: response.razorpay_signature,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        status: "Under Processing",
      })
      .then(() => {
        dispatch({
          type: "EMPTY_CART",
        });
        history.replace(
          `/processPayment/${response.razorpay_payment_id}/${response.razorpay_signature}`
        );
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  return (
    <div className="checkout">
      <h1>Checkout ({basket?.length} Items)</h1>
      <div className="checkout_container">
        <div className="checkout_section">
          <div className="checkout_section_title">
            <h3>1. Shipping address</h3>
          </div>
          <div className="checkout_section_address">
            <strong>Abhimanyu Dwivedi</strong>
            <p>XYX Colony Road , Bheem Nagar</p>
            <p>Lane Number 3 Alambagh</p>
            <p>LUCKNOW, UTTAR PRADESH 226005</p>
            <p>India</p>
            <p> Phone: 9044551212</p>
          </div>
        </div>

        <div className="checkout_section">
          <div className="checkout_section_title">
            <h3>2. Review Items</h3>
          </div>
          <div className="checkout_section_items">
            {basket.length > 0 &&
              basket.map((item) => (
                <CartItem
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  hideBtn
                />
              ))}

            {basket.length <= 0 && <p>No items in your cart.</p>}
          </div>
        </div>
        <div className="checkout_section">
          <div className="checkout_section_title">
            <h3>3. Payment Details</h3>
          </div>
          <div className="checkout_section_paymentDetails">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Total Payable Amount: <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rs. "}
            />

            <form onSubmit={handleSubmit}>
              <button
                className="checkout_section_paymentDetailsBtn"
                disabled={processing || disabled}
              >
                <span>
                  {processing ? (
                    <p>Processing</p>
                  ) : (
                    <p>Place Your Order and Pay</p>
                  )}
                </span>
              </button>
              {error && (
                <div className="checkout_section_paymentDetailsError">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <p className="checkout_footer">
        Need help? Check our help pages or contact us 24x7 When your order is
        placed, we'll send you an e-mail message acknowledging receipt of your
        order. If you choose to pay using an electronic payment method (credit
        card, debit card or net banking), you will be directed to your bank's
        website to complete your payment. Your contract to purchase an item will
        not be complete until we receive your electronic payment and dispatch
        your item.
      </p>
    </div>
  );
}

export default Checkout;
