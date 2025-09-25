import { Box, Button, Card, Grid, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ProductsData } from "../utils/dummyData";
import React from "react";

const Products = () => {
  return (
    <>
      <Box key={Products.id} className="flex-grow">
        <Grid container spacing={2}>
          {ProductsData?.map((product) => {
            return (
              <Grid size={3}>
                <Card className="w-[345px] p-5">
                  <Box
                    component="img"
                    src={product.img}
                    alt={product.productName}
                    className="mb-4"
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
    </>
  );
};

export default Products;
