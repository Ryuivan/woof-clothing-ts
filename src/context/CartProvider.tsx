/* eslint-disable react-refresh/only-export-components */
import { createContext, ReactElement, useMemo, useReducer } from "react";
import { ChildrenType } from "./ProductsProvider";

export type CartItemType = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  stock: number;
  color: string;
  quantity: number;
};

type CartStateType = {
  cart: CartItemType[];
};

const initCartState: CartStateType = {
  cart: [],
};

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  let newState: CartStateType;

  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }

      const product = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== product.id
      );

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.id === product.id
      );

      const quantity: number = itemExists ? itemExists.quantity + 1 : 1;

      newState = {
        ...state,
        cart: [...filteredCart, { ...product, quantity }],
      };

      break;
    }

    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }

      const { id } = action.payload;

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      newState = { ...state, cart: [...filteredCart] };

      break;
    }

    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }

      const { id, quantity } = action.payload;

      const itemExists: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      if (!itemExists) {
        throw new Error("Item must exist in order to update quantity");
      }

      const updatedItem: CartItemType = { ...itemExists, quantity };

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      newState = { ...state, cart: [...filteredCart, updatedItem] };

      break;
    }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      newState = { ...state, cart: [] };

      break;
    }

    default:
      throw new Error("Unidentified reducer error type");
  }

  localStorage.setItem("cart", JSON.stringify(newState.cart));

  return newState;
};

const useCartContext = (initCartState: CartStateType) => {
  const storedCart = localStorage.getItem("cart");
  const initialState = storedCart
    ? { cart: JSON.parse(storedCart) }
    : initCartState;

  const [state, dispatch] = useReducer(reducer, initialState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  const totalItems = state.cart.reduce(
    (total: number, item: CartItemType) => total + item.quantity,
    0
  );
  const totalPrice = state.cart.reduce(
    (total: number, item: CartItemType) => total + item.price * item.quantity,
    0
  );

  const cart = state.cart;

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: 0,
  cart: [],
};

export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  const cartContextValue = useCartContext(initCartState);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
