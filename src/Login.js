import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  return (
    <>
      <div className="backspace">
        <Link to="/">
          <button>
            Go Back
          </button>
        </Link>
      </div>
      <div className="login">
        <img
          className="login_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWHqE5ZgFck3xnlSt7N6mgq5MV_z0EWOgJjCQWQrzXGRgQNQWxMRCRb9BTHaqYEZ_VZI&usqp=CAU"
          alt="Loading"
        />

        <div className="login__container">
          <h1>Sign-In</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="login__signInButton">
              Sign In
            </button>
          </form>
          <p>
            By signing-in you agree to Shiva Shakti Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <Link to="/createacc">
            <button className="login__signInButton">Create Your Account</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
