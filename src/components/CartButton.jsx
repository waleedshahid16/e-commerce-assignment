import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CartButton = () => {
  const { cartList } = useSelector((state) => state.cart);
  const totalPrice = cartList
    .reduce((prev, curr) => {
      return (curr.quantity || 0) * (curr.price || 0) + prev;
    }, 0)
    .toFixed(2);
  return (
    <Box className="bg-[#019376] px-5 py-3 rounded-l-[8px]">
      {cartList?.length ? (
        <Typography
          variant="body2"
          sx={{ marginBottom: "10px", color: "white" }}
        >
          {cartList.length} {cartList.length === 1 ? "Item" : "Items"}
        </Typography>
      ) : (
        <Typography
          variant="body2"
          sx={{ marginBottom: "10px", color: "white" }}
        >
          No items added
        </Typography>
      )}
      <Button
        variant="filled"
        sx={{ bgcolor: "white", color: "#019376", fontWeight: 600 }}
      >
        ${totalPrice}
      </Button>
    </Box>
  );
};

export default CartButton;

