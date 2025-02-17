import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { ProductType } from "../../context/ProductsProvider";
import { CartItemType } from "../../context/CartProvider";
import ProductCard from "../../components/layout/product/ProductCard";
import {
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useThemeContext } from "../../context/ThemeProvider";
import PageTitle from "../../components/layout/pageTitle/PageTitle";
import ProductPagination from "../../components/layout/product/ProductPagination";
import { useLocation } from "react-router";

const Products = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();
  const { theme } = useThemeContext();

  const location = useLocation();
  const categoryInitialState: string = location.state?.category || "All";
  // Category filter
  const [selectedCategory, setSelectedCategory] =
    useState<string>(categoryInitialState);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const categories: string[] = Array.from(
    new Set(products.map((product: ProductType) => product.category))
  );

  const filteredProducts =
    selectedCategory !== "All"
      ? products.filter(
          (product: ProductType) => product.category === selectedCategory
        )
      : products;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const isInCart = ({ id }: ProductType): boolean => {
    return cart.some((item: CartItemType) => item.id === id);
  };

  return (
    <>
      <PageTitle title="Products" />

      <Stack direction="row" justifyContent="end">
        <FormControl
          variant="outlined"
          sx={{
            width: {
              xs: "100%",
              sm: "200px",
            },
          }}
        >
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            value={selectedCategory}
            label="Choose category"
            onChange={(e: SelectChangeEvent<string>) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <MenuItem value="All">All</MenuItem>
            {categories.map((category: string) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Grid2 container spacing={2} sx={{ marginTop: "32px" }}>
        {currentProducts.length > 0 ? (
          currentProducts.map((product: ProductType) => (
            <Grid2
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
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

      {totalPages > 1 && (
        <ProductPagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default Products;
