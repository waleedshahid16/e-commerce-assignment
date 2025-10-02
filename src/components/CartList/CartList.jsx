import { Drawer, IconButton, Button } from "@mui/material";
import { Close as CloseIcon, ShoppingBag } from "@mui/icons-material";

function CartList(props) {
  const { openCartList, toggleDrawer } = props;

  return (
    <Drawer anchor="right" open={openCartList} onClose={toggleDrawer(false)}>
      <div
        className="w-[450px] h-full flex flex-col bg-gray-50"
        role="presentation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-emerald-500 text-[28px]" />
            <h6 className="text-xl font-semibold text-emerald-500">0 Item</h6>
          </div>
          <IconButton onClick={toggleDrawer(false)} size="small">
            <CloseIcon className="text-gray-400" />
          </IconButton>
        </div>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="w-40 h-40 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 relative before:content-[''] before:absolute before:top-5 before:left-1/2 before:-translate-x-1/2 before:w-[60px] before:h-[30px] before:bg-emerald-600 before:rounded-t-[30px]">
            <div className="text-[80px] text-emerald-600 flex flex-col items-center mt-4">
              <div className="w-10 h-10 border-[6px] border-emerald-600 rounded-full mb-2" />
              <div className="flex gap-6 mb-2">
                <span className="text-2xl text-emerald-600 font-bold">×</span>
                <span className="text-2xl text-emerald-600 font-bold">×</span>
              </div>
              <div className="w-[30px] h-[30px] border-[6px] border-emerald-600 rounded-full" />
            </div>
          </div>
          <p className="text-base font-semibold text-gray-800">
            No products found
          </p>
        </div>

        {/* Checkout Button */}
        <div className="p-6 bg-white border-t border-gray-200">
          <Button
            fullWidth
            variant="contained"
            className="bg-emerald-500 text-white py-4 rounded-xl normal-case text-lg font-semibold hover:bg-emerald-600"
            sx={{
              bgcolor: "#10b981",
              "&:hover": {
                bgcolor: "#059669",
              },
            }}
          >
            <span className="flex-1 text-left">Checkout</span>
            <span className="bg-white text-emerald-500 px-4 py-1 rounded-lg font-bold">
              $0.00
            </span>
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default CartList;
