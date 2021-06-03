import React from "react";
import { useStateValue } from "../StateProvider";
import "./Cart.css";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

function Cart() {
  const [{ basket }] = useStateValue();
  return (
    <div className="cart">
      <div className="cart_left">
        <img
          src="https://m.media-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Jun_GTM/PC_Dashboar_770x150_2._CB667412567_.jpg"
          alt="cart_adBanner"
        />
        <div className="cart_basketItems">
          <h2 className="cart_title">Shopping Cart</h2>
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
          {basket.length <= 0 && (
            <div className="cart_empty">
              <RemoveShoppingCartIcon />
              <p> Your Amazon Basket is empty.</p>
            </div>
          )}
        </div>
      </div>
      <div className="cart_right">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt="payment protection"
        />
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
