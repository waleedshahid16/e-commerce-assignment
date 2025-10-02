import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./HeroSection";
import HeroCardImg from "./HeroCardImg";
import Products from "./Products";
import CartButton from "./CartButton";
import CartList from "./CartList/CartList";
import { useState } from "react";

const Home = () => {
  const [openCartList, setOpenCartList] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpenCartList(newOpen);
  };
  return (
    <Box className="relative">
      <HeroSection />
      <HeroCardImg />
      <Products />
      <Box
        onClick={toggleDrawer(true)}
        className="fixed right-0 top-1/2 transform -translate-y-1/2"
      >
        <CartButton />
      </Box>
      <CartList openCartList={openCartList} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Home;
