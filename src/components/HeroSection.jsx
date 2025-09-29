import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Grocery from "../assets/grocery.webp";

const HeroSection = () => {
  return (
    <Box className="relative h-screen w-full overflow-hidden">
      <Box
        component="img"
        src={Grocery}
        alt="Grocery background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <Box className="absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            fontSize: { xs: "1.75rem", lg: "2.5rem", xl: "3rem" },
            marginBottom:"25px",
          }}
        >
          Groceries Delivered in 90 Minute
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            fontSize: { xs: "0.9rem", lg: "1.1rem" },
            maxWidth: "800px",
          }}
        >
          Get your healthy foods &amp; snacks delivered at your doorsteps all
          day everyday
        </Typography>

        <Box className="w-full max-w-3xl mt-8">
          <Box className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <TextField
              fullWidth
              placeholder="Search your products from here"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                backgroundColor: "white",
              }}
            />
            <Button
              type="submit"
              startIcon={<SearchIcon />}
              variant="contained"
              sx={{
                bgcolor: "#019376",
                px: 3,
                borderRadius: "0 8px 8px 0",
                minWidth: "120px",
                textTransform: "none",
                "&:hover": { bgcolor: "#059669" },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
