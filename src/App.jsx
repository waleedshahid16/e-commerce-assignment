import React from "react";
import HeroSection from "./components/HeroSection";
import HeroCardImg from "./components/HeroCardImg";
import Products from "./components/Products";
import CartButton from "./components/CartButton";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import SignIn from "./components/auth/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="offer" element={<h1>Offer</h1>}></Route>
          </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
