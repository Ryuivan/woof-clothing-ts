import { Box } from "@mui/material";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const { totalItems, totalPrice } = useCart();

  return (
    <Box>
      <h1>Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
    </Box>
  );
};

export default Cart;
