import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import numeral from "numeral";


const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useNavigate();
 const formattedSubtotal = numeral(getBasketTotal(basket)).format("₹0,0");
  


  // generate the special stripe secret which allows us to charge a customer
 
  
 
  


    return (
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout {<Link to="/checkout">({basket?.length} items)</Link>}: ₹
            {formattedSubtotal}/-
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h2>Delivery Address</h2>
            </div>
            <div className="payment__address">
              <p>
                <strong>{user?.email}</strong>
              </p>
              <p>
                <strong>Puri</strong>
              </p>
              <p>
                <strong>Odisha, India</strong>
              </p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h2>Review Items And Delivery</h2>
            </div>
            <div className="payment__items">
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
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form>
                <div className="payment__priceContainer">
                  ₹{formattedSubtotal}/-
                  <button onClick={(e) => history("/orders")}>
                    Proceed To Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Payment;
