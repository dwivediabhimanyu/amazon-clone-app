import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import { useHistory } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./PaymentProcessing.css";
function PaymentProcessing() {
  let { paymentId, signature } = useParams();
  const history = useHistory();
  useEffect(() => {
    const verifyPayment = async () => {
      const res = await axios.post("/verifyPayment", {
        paymentId: paymentId,
        signature: signature,
      });

      if (res.data.isValid) {
        history.replace("/orders");
      }
    };
    if (paymentId && signature) {
      verifyPayment();
    }
  }, []);

  return (
    <div className="payment_processing">
      <div className="payment_processing_details">
        <h1>Your Payment is being processed.</h1>
        <h1>Do not refresh or press back button.</h1>
        <LinearProgress style={{ margin: "25px" }} />
        <p className="payment_processing_details_p"> Order Id: {paymentId}</p>
        <p className="payment_processing_details_p"> Signature: {signature}</p>
        <p className="payment_processing_details_p">
          {" "}
          You will be redirected to Orders Page once Payment verification is
          complete.
        </p>
      </div>
    </div>
  );
}

export default PaymentProcessing;
