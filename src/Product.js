import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const history = useNavigate();
 
  // console.log("THis is basket", basket)

  const addToBasket = () => {
    //dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
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
    <>
      <div className="product" onDoubleClick={(e) => history("/checkout")}>
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>₹</small>
            <strong>{price}</strong>
            <small>/-</small>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map(() => (
                <p>🌟</p>
              ))}
          </div>
        </div>
        <img src={image} alt="Loading" />

        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
