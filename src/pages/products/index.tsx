import { ReactElement } from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { ProductType } from "../../context/ProductsProvider";
import { CartItemType } from "../../context/CartProvider";
import ProductCard from "../../components/layout/product/ProductCard";
import { Grid2 } from "@mui/material";
import { useThemeContext } from "../../context/ThemeProvider";

const Products = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();
  const { theme } = useThemeContext();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length) {
    pageContent = products.map((product: ProductType) => {
      const inCart: boolean = cart.some(
        (item: CartItemType) => item.id === product.id
      );

      return (
        <Grid2 size={3} key={product.id}>
          <ProductCard
            product={product}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
            inCart={inCart}
            theme={theme.palette.mode}
          />
        </Grid2>
      );
    });
  }

  return (
    <Grid2 container spacing={2}>
      {pageContent}
    </Grid2>
  );
};

export default Products;
