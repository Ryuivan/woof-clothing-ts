import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../../context/CartProvider";
import { ActionDispatch, ReactElement } from "react";
import getImageUrl from "../../../utils/getImageUrl";
import { Close } from "@mui/icons-material";
import { formatNumberToIDR } from "../../../utils/formatNumberToIDR";

type CartLineItemProps = {
  item: CartItemType;
  dispatch: ActionDispatch<[action: ReducerAction]>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({
  item,
  dispatch,
  REDUCER_ACTIONS,
}: CartLineItemProps) => {
  const img: string = getImageUrl(item);
  const lineTotal: number = item.price * item.quantity;
  const highestQuantity: number = 10 > item.quantity ? 10 : item.quantity;

  const optionValues: number[] = [...Array(highestQuantity).keys()].map(
    (i) => i + 1
  );

  const options: ReactElement[] = optionValues.map((value) => {
    return (
      <MenuItem key={`opt${value}`} value={value}>
        {value}
      </MenuItem>
    );
  });

  const onChangeQuantity = (event: SelectChangeEvent<number>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: event.target.value as number },
    });
  };

  const onRemoveFromCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });
  };

  return (
    <ListItem
      disablePadding
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "16px",
        padding: "16px",
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        height: {
          xs: "auto",
          sm: "230px",
        },
        alignItems: "center",
        gap: "24px",
        marginBottom: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100px",
          height: {
            xs: "auto",
            sm: "200px",
          },
          flexShrink: 0,
        }}
      >
        <img
          src={img}
          alt={item.name}
          width="100%"
          height="100%"
          style={{ borderRadius: "8px" }}
        />
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        height="100%"
      >
        <Stack
          direction="column"
          justifyContent="space-between"
          height="100%"
          sx={{
            overflow: "hidden",
          }}
        >
          <Typography
            fontSize={{
              xs: "18px",
              sm: "20px",
              lg: "24px",
            }}
            fontWeight={600}
            color="text.primary"
          >
            {item.name}
          </Typography>

          <Stack
            direction={{
              xs: "column",
              md: "row",
              lg: "column",
              xl: "row",
            }}
            justifyContent={{
              xs: "start",
              md: "space-between",
              lg: "start",
              xl: "space-between",
            }}
            spacing={{
              xs: 2,
              md: 5,
              lg: 2,
              xl: 5,
            }}
            sx={{
              color: "text.secondary",
              flex: 1,
              flexWrap: "wrap",
              marginTop: "16px",
            }}
          >
            <Box
              sx={{
                paddingBottom: "4px",
              }}
            >
              <Typography
                fontSize="14px"
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                    lg: "none",
                    xl: "block",
                  },
                }}
              >
                Price
              </Typography>
              <Typography
                fontSize={{
                  xl: "16px",
                }}
                fontWeight={500}
              >
                {formatNumberToIDR(item.price)}
              </Typography>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  lg: "none",
                  xl: "block",
                },
              }}
            >
              <Typography>*</Typography>
            </Box>

            <FormControl
              variant="standard"
              sx={{
                marginTop: "32px",
                width: "200px",
              }}
            >
              <InputLabel id="itemQty">Quantity</InputLabel>
              <Select
                name="itemQty"
                labelId="itemQty"
                value={item.quantity}
                onChange={onChangeQuantity}
                aria-label="quantity"
              >
                {options}
              </Select>
            </FormControl>
          </Stack>

          <Box
            sx={{
              marginTop: {
                xs: "32px",
                sm: 0,
              },
            }}
          >
            <Typography fontWeight={600} fontSize="18px">
              {formatNumberToIDR(lineTotal)}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="column" justifyContent="center" alignItems="flex-end">
          <IconButton onClick={onRemoveFromCart}>
            <Close />
          </IconButton>
        </Stack>
      </Stack>
    </ListItem>
  );
};

export default CartLineItem;
