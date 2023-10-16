import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Promotions/Oct23/Jupiter/Phase1/Get400_PC.gif"
          alt="Ad"
        />
        <div>
          <h3>User: {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
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
      <div className="checkout__right">
        <h2>The Subtotal</h2>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
