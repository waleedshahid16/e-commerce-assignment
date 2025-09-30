import React, { useState } from "react";
import { navButtonStyle } from "./style";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../assets/Logo-new.webp";
import { navButtonStyle } from "./style";

const MyAppBar = () => {
  const navItems = ["Shop", "Offer", "Contact"];

  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      <Box className="flex">
        <AppBar component="nav" sx={{ bgcolor: "#FAFAFA" }} elevation={0}>
          <Toolbar className="px-0 flex justify-between">
            <Box className="flex items-center gap-4">
              <Typography
                variant="h6"
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <img src={Logo} alt="" />
              </Typography>

              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Items</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Items"
                  className="color-success-800"
                >
                  <MenuItem>Grocery</MenuItem>
                  <MenuItem>Bakery</MenuItem>
                  <MenuItem>Makeup</MenuItem>
                  <MenuItem>Bags</MenuItem>
                  <MenuItem>Clothing</MenuItem>
                  <MenuItem>Furniture</MenuItem>
                  <MenuItem>Daily Needs</MenuItem>
                  <MenuItem>Books</MenuItem>
                  <MenuItem>Gadget</MenuItem>
                  <MenuItem>Medicine</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box className="hidden sm:flex gap-6">
              {/* {navItems.map((item) => (
                <Button key={item} sx={navButtonStyle}>
                  {item}
                </Button>
              ))} */}
              <Button component={Link} to="/shop" sx={navButtonStyle}>
                Shops
              </Button>
              <Button component={Link} to="/offer" sx={navButtonStyle}>
                Offer
              </Button>
              <Button component={Link} to="/contact" sx={navButtonStyle}>
                Contact
              </Button>

              <Box
                onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                onMouseLeave={() => setAnchorEl(null)}
              >
                <Button sx={navButtonStyle}>Pages</Button>

                <Menu
                  sx={{
                    borderRadius: "5px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    mt: "5px",
                  }}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  MenuListProps={{
                    onMouseEnter: () => setAnchorEl(anchorEl),
                    onMouseLeave: () => setAnchorEl(null),
                  }}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Flash Sale
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Manufactures/Publishers
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>Authors</MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>FAQ</MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Terms and Conditions
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Customer Refund Policy
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Vender Refund Policy
                  </MenuItem>
                </Menu>
              </Box>

              <Button
                variant="contained"
                sx={{ textTransform: "none", bgcolor: "#019376" }}
              >
                Join
              </Button>
              <Button
                variant="contained"
                sx={{ textTransform: "none", bgcolor: "#019376" }}
              >
                Become a Seller
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
