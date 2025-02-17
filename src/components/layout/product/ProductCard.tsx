import { ProductType } from "../../../context/ProductsProvider";
import {
  ReducerAction,
  ReducerActionType,
} from "../../../context/CartProvider";
import { ReactElement } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  PaletteMode,
  Typography,
} from "@mui/material";
import { AddShoppingCart, DoneAll } from "@mui/icons-material";
import getImageUrl from "../../../utils/getImageUrl";
import { Link } from "react-router";
import { makeErrorToast, makeSuccessToast } from "../../../utils/makeToast";

type ProductCartProps = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
  theme: PaletteMode;
};

const ProductCard = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
  theme,
}: ProductCartProps): ReactElement => {
  const img: string = getImageUrl(product);

  const onAddToCart = () => {
    try {
      dispatch({
        type: REDUCER_ACTIONS.ADD,
        payload: { ...product, quantity: 1 },
      });

      makeSuccessToast("Item added to cart", theme);
    } catch (error) {
      console.error(error);
      makeErrorToast("Failed to add to cart", theme);
    }
  };

  const onRemoveFromCart = () => {
    try {
      dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: { ...product, quantity: 1 },
      });

      makeSuccessToast(`Item removed from cart`, theme);
    } catch (error) {
      console.error(error);
      makeErrorToast("Failed to remove from cart", theme);
    }
  };

  return (
    <Card
      sx={{
        padding: "16px",
        borderRadius: "16px",
        ":hover": {
          boxShadow:
            theme === "light"
              ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
              : "0px 0px 10px 0px rgba(255,255,255,0.5)",
        },
      }}
    >
      <Link to={`/products/${product.id}`}>
        <CardMedia
          component="img"
          width="350"
          height="350"
          image={img}
          alt={product.name}
          sx={{
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </Link>

      <CardContent
        sx={{
          padding: 0,
          marginTop: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography color="text.primary" variant="body1" fontWeight={600}>
            {product.name}
          </Typography>
          <Typography color="text.primary" variant="body2">
            Rp. {product.price}.000
          </Typography>
        </Box>

        <Box>
          <CardActions sx={{ padding: 0 }}>
            <IconButton onClick={inCart ? onRemoveFromCart : onAddToCart}>
              {inCart ? <DoneAll /> : <AddShoppingCart />}
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
