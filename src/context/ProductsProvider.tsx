import { createContext, ReactElement, useEffect, useState } from "react";

export type ProductType = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  color: string;
};

const initState: ProductType[] = [];

export type UseProductsContextType = {
  products: ProductType[];
};

const initContextState: UseProductsContextType = {
  products: [],
};

const ProductsContext = createContext<UseProductsContextType>(initContextState);

export type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) {
            console.log(err.message);
          }
        });

      return data;
    };

    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
