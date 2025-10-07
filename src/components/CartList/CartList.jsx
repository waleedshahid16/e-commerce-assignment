import { Box, Button, ButtonGroup, Drawer } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart, removeFromCart } from "../../store/slice/cartListSlice";
import { Link } from "react-router";

function CartList(props) {
  const { openCartList, toggleDrawer } = props;
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cartList
    .reduce((prev, curr) => {
      return (curr.quantity || 0) * (curr.price || 0) + prev;
    }, 0)
    .toFixed(2);
  return (
    <div>
      <Drawer anchor="right" open={openCartList} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 450 }} role="presentation">
          {cartList?.length ? (
            <div>
              {cartList.map((product) => {
                return (
                  <div className="flex items-center">
                    <div>
                      <img className="w-[80px]" src={product?.img} alt="" />
                    </div>
                    <div>
                      <h3>{product?.productName}</h3>
                      <ButtonGroup>
                        <Button
                          size="small"
                          onClick={() => dispatch(removeFromCart(product))}
                        >
                          <RemoveIcon />
                        </Button>
                        <Button size="small">{product.quantity}</Button>
                        <Button
                          size="small"
                          onClick={() => dispatch(addToCart(product))}
                        >
                          <AddIcon />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>No Products</h1>
          )}
          {cartList?.length ? (
            <div>
              <Button
                fullWidth
                variant="contained"
                sx={{ textTransform: "none", bgcolor: "#019376" }}
              >
                Total price ${totalPrice}
              </Button>
            </div>
          ) : (
            <div>
              <Button
                fullWidth
                component={Link}
                to="/"
                variant="contained"
                sx={{ textTransform: "none", bgcolor: "#019376" }}
              >
                Add items to cart
              </Button>
            </div>
          )}
        </Box>
      </Drawer>
    </div>
  );
}
export default CartList;
