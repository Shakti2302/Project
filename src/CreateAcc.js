import React, { useState } from 'react'
import {  Link, useNavigate } from "react-router-dom";

import './Login.css'


const CreateAcc = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  
  return (
    <>
      <div className="backspace">
        <Link to="/login">
        <button className='backspace__button'>
          Go Back
        </button>
        </Link>
      </div>
      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWHqE5ZgFck3xnlSt7N6mgq5MV_z0EWOgJjCQWQrzXGRgQNQWxMRCRb9BTHaqYEZ_VZI&usqp=CAU"
            alt="Loading"
          />
        </Link>
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

            <button className="login__signInButton">
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAcc
