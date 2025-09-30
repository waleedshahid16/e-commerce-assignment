import React, { useState } from "react";
import { Box, Button, CircularProgress, Fade, Grid, Modal, Typography } from "@mui/material";
import { ProductDetailModalStyle } from "./style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { ProductsData } from "../utils/dummyData";

const ProductDetailModal = (props) => {
  const { openModal, handleClose, currentProductId } = props;
  const selectedProduct = ProductsData.find(
    (product) => product.id === currentProductId
  );
  console.log(selectedProduct);

  const [isExpanded, setIsExpanded] = useState(false);

  const text =
    "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh.";
  const maxLength = 200;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : text.slice(0, maxLength);
  const shouldShowButton = text.length > maxLength;

  return (
    <>
      <Box>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Fade in={openModal}>
            <Box sx={ProductDetailModalStyle}>
              {selectedProduct ? (
                <Box className="flex-grow">
                  <Grid container spacing={4}>
                    <Grid size={6}>
                      <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <img src={selectedProduct?.img} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                      </Swiper>
                    </Grid>
                    <Grid size={6}>
                      <Box className="flex justify-between">
                        <Box>
                          <Typography
                            variant="h4"
                            className="mb-2 hover:color-[#019376]"
                          >
                            {selectedProduct?.productName}
                          </Typography>
                          <Typography variant="body2">
                            {selectedProduct?.weight}
                          </Typography>
                        </Box>
                        <Box className="flex flex-col items-end">
                          <Button
                            variant="outlined"
                            sx={{
                              width: 40,
                              height: 40,
                              minWidth: 0,
                              borderRadius: "50%",
                              marginBottom: "0.5rem",
                              border: "1px solid grey",
                            }}
                          >
                            <FavoriteBorderIcon className="text-[#019376]" />
                          </Button>
                          <Button
                            variant="contained"
                            sx={{ bgcolor: "#019376" }}
                          >
                            <StarBorderIcon />
                          </Button>
                        </Box>
                      </Box>

                      <Typography variant="body2" className="py-6">
                        {displayText}
                        {!isExpanded && shouldShowButton && "..."}
                      </Typography>

                      {shouldShowButton && (
                        <Button
                          onClick={toggleReadMore}
                          sx={{ color: "#019376", fontWeight: 600 }}
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </Button>
                      )}
                      <Typography
                        variant="h5"
                        className="text-[#019376] py-5"
                        sx={{ fontWeight: 600 }}
                      >
                        ${selectedProduct?.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box className="p-50 flex justify-center">
                  <CircularProgress color="inherit" />
                </Box>
              )}
            </Box>
          </Fade>
        </Modal>
      </Box>
    </>
  );
};

export default ProductDetailModal;
