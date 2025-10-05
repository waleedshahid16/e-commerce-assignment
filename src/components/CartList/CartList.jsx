import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";

function CartList(props) {
  const { openCartList, toggleDrawer } = props;

  return (
    <div>
      <Drawer anchor="right" open={openCartList} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 450 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >Products</Box>
      </Drawer>
    </div>
  );
}
export default CartList;