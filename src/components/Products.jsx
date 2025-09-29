import { Box, Button, Card, Grid, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductsData } from "../utils/dummyData";
import React, { useState } from "react";
import ProductDetailModal from "./ProductDetailMadal";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState({});
  const handleOpen = (productDetails) => {
    console.log(productDetails);

    setOpenModal(true);
    setCurrentProductId(productDetails.id);
  };

  const handleClose = () => setOpenModal(false);
  return (
    <>
      <Box className="flex-grow">
        <Grid container spacing={2}>
          {ProductsData?.map((product) => {
            return (
              <Grid key={product.id} size={3}>
                <Card className="w-[345px] p-5">
                  <Box
                    component="img"
                    src={product.img}
                    alt={product.productName}
                    className="mb-4 cursor-pointer"
                    onClick={() => handleOpen(product)}
                  />
                  <Typography variant="h6">{product.productName}</Typography>
                  <Typography variant="subtitle1">{product.weight}</Typography>

                  <Box className="flex justify-between mt-4">
                    <Typography variant="h6">${product.price}</Typography>
                    <Button
                      sx={{
                        borderRadius: "50px",
                        border: "1px solid #019376",
                        color: "#019376",
                        textTransform: "none",
                      }}
                    >
                      <AddShoppingCartIcon sx={{ mr: 1 }} />
                      Cart
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {open && (
        <ProductDetailModal
          openModal={openModal}
          handleOpen={handleOpen}
          handleClose={handleClose}
          currentProductId={currentProductId}
        />
      )}
    </>
  );
};

export default Products;
