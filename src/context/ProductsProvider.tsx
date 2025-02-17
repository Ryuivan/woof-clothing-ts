import { createContext, ReactElement } from "react";

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

// const initState: ProductType[] = [];

const initState: ProductType[] = [
  {
    id: 6,
    name: "Pink Signature Hoodie",
    image: "hoodies-pink-signature",
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: 249000,
    category: "Hoodie",
    stock: 10,
    color: "#C39DBA",
  },
  {
    id: 7,
    name: "Yellow Signature Hoodie",
    image: "hoodies-yellow-signature",
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: 249000,
    category: "Hoodie",
    stock: 10,
    color: "#fde97f",
  },
  {
    id: 8,
    name: "Green Hoodie",
    image: "hoodies-green",
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: 249000,
    category: "Hoodie",
    stock: 10,
    color: "#3EA590",
  },
  {
    id: 9,
    name: "Black Hoodie",
    image: "hoodies-black",
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: 249000,
    category: "Hoodie",
    stock: 10,
    color: "#626669",
  },
  {
    id: 10,
    name: "Red Hoodie",
    image: "hoodies-red",
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: 249000,
    category: "Hoodie",
    stock: 10,
    color: "#BB4B63",
  },
  {
    id: 11,
    name: "Yellow Hoodie",
    image: "hoodies-yellow",
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: 249000,
    category: "Hoodie",
    stock: 10,
    color: "#E4D793",
  },
];

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
  // const [products, setProducts] = useState<ProductType[]>(initState);
  const products: ProductType[] = initState; 

  // setProducts(initState);

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("http://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) {
  //           console.log(err.message);
  //         }
  //       });

  //     return data;
  //   };

  //   fetchProducts().then((products) => setProducts(products));
  // }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
