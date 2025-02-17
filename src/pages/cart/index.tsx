import { Box, Button, Divider, List, Stack, Typography } from "@mui/material";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import CartLineItem from "../../components/layout/cart/CartLineItem";
import { CartItemType } from "../../context/CartProvider";
import { formatNumberToIDR } from "../../utils/formatNumberToIDR";
import { makeSuccessToast } from "../../utils/makeToast";
import { useThemeContext } from "../../context/ThemeProvider";

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTIONS, totalItems, cart, totalPrice } = useCart();
  const { theme } = useThemeContext();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
    makeSuccessToast("Order checked out", theme.palette.mode);
  };

  return (
    <Box>
      {confirm ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Typography
            fontSize={{
              xs: "20px",
              sm: "24px",
              md: "28px",
            }}
            fontWeight={600}
            textAlign="center"
          >
            Thank you for your order
          </Typography>
        </Box>
      ) : (
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          justifyContent="space-between"
          spacing={2}
        >
          {cart.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
                flex: 1,
              }}
            >
              <Typography
                fontSize={{
                  xs: "20px",
                  sm: "24px",
                  md: "28px",
                }}
                fontWeight={600}
                textAlign="center"
              >
                Your cart is empty
              </Typography>
            </Box>
          ) : (
            <>
              <List sx={{ flex: 1 }} disablePadding>
                {cart.map((item: CartItemType) => (
                  <CartLineItem
                    key={item.id}
                    item={item}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                  />
                ))}
              </List>

              <Box
                width={{
                  xs: "100%",
                  lg: "350px",
                }}
                sx={{
                  backgroundColor: "background.paper",
                  color: "text.primary",
                  borderRadius: "16px",
                  height: "fit-content",
                  padding: "16px",
                }}
              >
                <Box sx={{ marginBottom: "8px" }}>
                  <Typography fontSize="20px" fontWeight="600">
                    Cart Summary
                  </Typography>
                </Box>

                <Divider />

                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ marginTop: "16px" }}
                >
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontSize="16px">Total Items</Typography>
                    <Typography fontSize="16px" fontWeight="500">
                      {totalItems}
                    </Typography>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontSize="16px">Total Price</Typography>
                    <Typography fontSize="16px" fontWeight="500">
                      {formatNumberToIDR(totalPrice)}
                    </Typography>
                  </Stack>
                </Stack>

                <Button
                  variant="outlined"
                  onClick={onSubmitOrder}
                  disabled={!totalItems}
                  fullWidth
                  sx={{
                    marginTop: "24px",
                    color: "text.primary",
                    borderColor: "text.primary",
                    "&:hover": {
                      borderColor: "text.primary",
                    },
                  }}
                >
                  Checkout
                </Button>
              </Box>
            </>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
