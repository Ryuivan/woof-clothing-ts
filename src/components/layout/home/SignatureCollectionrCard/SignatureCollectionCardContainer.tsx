import { Grid2 } from "@mui/material";
import useCart from "../../../../hooks/useCart";
import useProducts from "../../../../hooks/useProducts";
import { useThemeContext } from "../../../../context/ThemeProvider";
import { ProductType } from "../../../../context/ProductsProvider";
import { CartItemType } from "../../../../context/CartProvider";
import ProductCard from "../../product/ProductCard";

const SignatureCardContainer = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();
  const { theme } = useThemeContext();

  const filteredProducts = products.filter(
    (product: ProductType) => product.category === "Signature"
  );

  const isInCart = ({ id }: ProductType): boolean => {
    return cart.some((item: CartItemType) => item.id === id);
  };

  return (
    <Grid2 container spacing={2}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product: ProductType) => (
          <Grid2
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            key={product.id}
          >
            <ProductCard
              product={product}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
              inCart={isInCart(product)}
              theme={theme.palette.mode}
            />
          </Grid2>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Grid2>
  );
};

export default SignatureCardContainer;
