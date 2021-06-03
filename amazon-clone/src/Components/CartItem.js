import React from "react";
import "./CartItem.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function CartItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="cartItem">
      <img className="cartItem_image" src={image} alt={title} />
      <div className="cartItem_info">
        <p className="cartItem_title">{title}</p>
        <p className="cartItem_price">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <strong>{value}</strong>
              </>
            )}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs. "}
          />
        </p>
        <div className="cartItem_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CartItem;
