import React, { useState, useEffect } from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [subtotal, setSubtotal] = useState(0);
  const [{ basket }] = useStateValue();
  useEffect(() => {
    setSubtotal(basket?.reduce((a, b) => a + b.price, 0));
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtoal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs. "}
      />
      <button>Checkout</button>
    </div>
  );
}

export default Subtotal;
