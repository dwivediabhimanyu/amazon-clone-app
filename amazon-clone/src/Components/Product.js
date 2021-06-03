import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  //console.log(state["basket"]);
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="prodcut_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/81NYuWzsJcS.jpg"
          className="product_image"
          alt="Product"
        />
        <button className="product_addToCartButton" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
