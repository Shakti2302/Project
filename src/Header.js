import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  


  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWHqE5ZgFck3xnlSt7N6mgq5MV_z0EWOgJjCQWQrzXGRgQNQWxMRCRb9BTHaqYEZ_VZI&usqp=CAU"
            alt="Logo"
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <div className="header__searchIcon">Search</div>
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <button type="button" className="btn btn-light">
                <img
                className="cart__img"
                  src="https://i.pinimg.com/736x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
                  alt=""
                />
              </button>
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
