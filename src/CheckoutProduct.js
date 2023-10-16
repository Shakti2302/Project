import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="left_img">
        <img className="checkoutProduct__image" src={image} alt="Loading" />
      </div>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title ">{title}</p>

        <small>₹</small>
        <strong>{price}</strong>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Cart</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
