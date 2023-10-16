import React, { useState, useEffect } from "react";

import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import CheckoutProduct from "./CheckoutProduct";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {basket.map((item) => (
          <CheckoutProduct
            key={item.id} // Don't forget to add a unique key prop
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
