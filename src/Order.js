import React from "react";
import "./Order.css";

import CheckoutProduct from "./CheckoutProduct";
import numeral from "numeral"; // Import numeral library

function Order({ order }) {
  // Format the order total using numeral
  const formattedTotal = numeral(order.data.amount / 100).format("₹0,0.00");

  return (
    <div className="order">
      <h2>Order</h2>
      
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id} // Add a unique key prop for each product
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <h3 className="order__total">Order Total: {formattedTotal}</h3>
    </div>
  );
}

export default Order;
