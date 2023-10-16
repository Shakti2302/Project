import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import CreateAcc from "./CreateAcc";
import Payment from "./Payment";

import Orders from "./Orders";

const Main = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};
const MainTwo = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
};
const MainThree = () => {
  return (
    <>
      <Header />
      <Orders />
    </>
  );
};
const MainFour = () => {
  return (
    <>
      <Header />
      <Payment />
    </>
  );
};

const App = () => {
  const [{}, dispatch] = useStateValue();

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/checkout" element={<MainTwo />} />
        <Route path="/orders" element={<MainThree />} />
        <Route path="/payment" element={<MainFour />} />

        <Route path="/login" element={<Login />} />
        <Route path="/createacc" element={<CreateAcc />} />
      </Routes>
    </>
  );
};

export default App;
