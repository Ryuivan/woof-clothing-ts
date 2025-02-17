import { Box } from "@mui/material";
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from "../../../context/CartProvider";
import { ActionDispatch, ChangeEvent, ReactElement } from "react";
import getImageUrl from "../../../utils/getImageUrl";

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
  // console.log(`${item.name}: ${img}`);

  const lineTotal: number = item.price * item.quantity;
  const highestQuantity: number = 10 > item.quantity ? 10 : item.quantity;

  const optionValues: number[] = [...Array(highestQuantity).keys()].map(
    (i) => i + 1
  );

  const options: ReactElement[] = optionValues.map((value) => {
    return (
      <option key={`opt${value}`} value={value}>
        {value}
      </option>
    );
  });

  const onChangeQuantity = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: parseInt(event.target.value) },
    });
  };

  const onRemoveFromCart = () => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });
  };

  

  return (
    <Box>
      <li>
        <Box>
          <img src={img} alt={item.name} width={300} height={300} />
        </Box>
        <Box>
          <Box>
            <Box>{item.name}</Box>
            <Box>{item.price}</Box>
            <Box>
              <label htmlFor="itemQty">Quantity:</label>
              <select
                name="itemQty"
                id="itemQty"
                value={item.quantity}
                onChange={onChangeQuantity}
                aria-label="quantity"
              >
                {options}
              </select>
            </Box>
            <Box>Line item total: {lineTotal}</Box>
            <Box>
              <button onClick={onRemoveFromCart}>Remove</button>
            </Box>
          </Box>
        </Box>
      </li>
    </Box>
  );
};

export default CartLineItem;
