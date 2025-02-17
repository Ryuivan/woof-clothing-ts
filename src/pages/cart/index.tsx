import { Box, Button, Typography } from "@mui/material";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import CartLineItem from "../../components/layout/cart/CartLineItem";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, cart, totalPrice } = useCart();

  console.log(cart)

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  return (
    <Box>
      <Box>
        {confirm ? (
          <Typography>Thank you for your order</Typography>
        ) : (
          cart.map((item) => (
            <CartLineItem
              key={item.id}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          ))
        )}
      </Box>

      <Box>
        <Typography>Total Items: {totalItems}</Typography>
        <Typography>Total Price: {totalPrice}</Typography>
        <Button
          variant="outlined"
          onClick={onSubmitOrder}
          disabled={!totalItems}
        >
          Submit Order
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
