import React from "react";
import CartItem from "./CartItem";
import "./OrderProduct.css";
function OrderProduct({ order }) {
  return (
    <div className="order">
      <div className="order_details">
        <div className="order_details_header">
          <div className="order_details_section">
            <span className="order_details_lineone">Order Placed</span>
            <span className="order_details_linetwo">19 May 2021</span>
          </div>
          <div className="order_details_section">
            <span className="order_details_lineone">Total</span>
            <span className="order_details_linetwo">
              Rs. {order.data.amount}
            </span>
          </div>
          <div className="order_details_section">
            <span className="order_details_lineone">Shipped to</span>
            <span className="order_details_linetwo">Abhimanyu</span>
          </div>
          <div className="order_details_section">
            <span className="order_details_lineone">Order ID</span>
            <span className="order_details_linetwo">{order.id}</span>
          </div>
          <div className="order_details_section">
            <span className="order_details_lineone">Order Status</span>
            <span className="order_details_linetwo">
              <p className="order_status">{order.data.status}</p>
            </span>
          </div>
        </div>
      </div>

      {order.data.basket?.map((item) => (
        <CartItem
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideBtn
        />
      ))}
    </div>
  );
}

export default OrderProduct;
