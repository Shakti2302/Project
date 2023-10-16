import React from "react";
import "./Subtotal.css";
import numeral from "numeral"; // Import numeral library
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const history = useNavigate();

  // Format the subtotal using numeral
  const formattedSubtotal = numeral(getBasketTotal(basket)).format("₹0,0");

  return (
    <div className="subtotal">
      <div>
        <p>
          Subtotal ({basket.length} items):
          <strong>₹{formattedSubtotal}/-</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a gift
        </small>
      </div>
      <button onClick={(e) => history("/payment")}>Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;







