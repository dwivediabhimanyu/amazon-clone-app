import React from "react";
import "./Checkout.css";
import CartItem from "./CartItem";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ user, basket }, dispatch] = useStateValue();
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
            <p>554/400 Barha, Bheem Nagar</p>
            <p>Lane Number 3 Alambagh</p>
            <p>LUCKNOW, UTTAR PRADESH 226005</p>
            <p>India</p>
            <p> Phone: 9044881968</p>
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
            <p>Card Number</p>
            <button>Place Your Order and Pay </button>
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
