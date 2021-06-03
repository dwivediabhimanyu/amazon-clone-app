import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
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
        <button className="product_addToCartButton">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
