import { Box, Button, Card, Grid, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState } from "react";
import ProductDetailModal from "./ProductDetailMadal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slice/cartListSlice";

const Products = () => {
  const { Products: productsDummyData } = useSelector((state) => state.cart);
  const { searchTerm } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState({});

  
  const filteredProducts = searchTerm
    ? productsDummyData.filter((prod) =>
        prod.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : productsDummyData;

  const handleOpen = (productDetails) => {
    console.log(productDetails);
    setOpenModal(true);
    setCurrentProductId(productDetails.id);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Box id="products-section" className="flex-grow">
        <Grid container spacing={2}>
          {filteredProducts?.map((product, index) => {
            return (
              <Grid
                key={product.id}
                size={3}
                id={
                  index === 0 && searchTerm
                    ? `product-${product.id}`
                    : undefined
                }
              >
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
                      onClick={() => dispatch(addToCart(product))}
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
      {openModal && (
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
