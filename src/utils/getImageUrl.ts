import { CartItemType } from "../context/CartProvider";
import { ProductType } from "../context/ProductsProvider";

const getImageUrl = (product: ProductType | CartItemType): string => {
  return new URL(
    `../assets/product/${product.category}/${product.image}.jpg`,
    import.meta.url
  ).href;
};

export default getImageUrl;
