import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CartButton = () => {
  return (
    <Box className="bg-[#019376] px-5 py-3 rounded-l-[8px]">
      <Typography variant="body2" sx={{ marginBottom: "10px", color: "white" }}>
        1 Item
      </Typography>
      <Button
        variant="filled"
        sx={{ bgcolor: "white", color: "#019376", fontWeight: 600 }}
      >
        $ 20
      </Button>
    </Box>
  );
};

export default CartButton;
