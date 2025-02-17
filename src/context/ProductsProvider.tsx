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
    id: 1,
    name: "Pink Signature Crop Top",
    image: "crop-pink-signature",
    description: "A stylish crop top made of 100% cotton.",
    price: 99000,
    category: "Signature",
    stock: 10,
    color: "#C39DBA",
  },
  {
    id: 2,
    name: "Green Crop Top",
    image: "crop-green",
    description: "A stylish crop top made of 100% cotton.",
    price: 99000,
    category: "Crop Top",
    stock: 10,
    color: "#3EA590",
  },
  {
    id: 3,
    name: "Black Crop Top",
    image: "crop-black",
    description: "A stylish crop top made of 100% cotton.",
    price: 99000,
    category: "Crop Top",
    stock: 10,
    color: "#626669",
  },
  {
    id: 4,
    name: "Red Crop Top",
    image: "crop-red",
    description: "A stylish crop top made of 100% cotton.",
    price: 99000,
    category: "Crop Top",
    stock: 10,
    color: "#BB4B63",
  },
  {
    id: 5,
    name: "Yellow Crop Top",
    image: "crop-yellow",
    description: "A stylish crop top made of 100% cotton.",
    price: 99000,
    category: "Crop Top",
    stock: 10,
    color: "#E4D793",
  },
  {
    id: 6,
    name: "Pink Signature Hoodie",
    image: "hoodies-pink-signature",
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: 249000,
    category: "Signature",
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
    category: "Signature",
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
  {
    id: 12,
    name: "Pink Signature Sweater",
    image: "sweater-pink-signature",
    description: "A sweater that offers high levels of comfort and warmth.",
    price: 99000,
    category: "Signature",
    stock: 10,
    color: "#C39DBA",
  },
  {
    id: 13,
    name: "Yellow Signature Sweater",
    image: "sweater-yellow-signature",
    description: "A sweater that offers high levels of comfort and warmth.",
    price: 99000,
    category: "Signature",
    stock: 10,
    color: "#fde97f",
  },
  {
    id: 14,
    name: "Green Sweater",
    image: "sweater-green",
    description: "A sweater that offers high levels of comfort and warmth.",
    price: 99000,
    category: "Sweater",
    stock: 10,
    color: "#3EA590",
  },
  {
    id: 15,
    name: "Black Sweater",
    image: "sweater-black",
    description: "A sweater that offers high levels of comfort and warmth.",
    price: 99000,
    category: "Sweater",
    stock: 10,
    color: "#626669",
  },
  {
    id: 16,
    name: "Red Sweater",
    image: "sweater-red",
    description: "A sweater that offers high levels of comfort and warmth.",
    price: 99000,
    category: "Sweater",
    stock: 10,
    color: "#BB4B63",
  },
  {
    id: 17,
    name: "Yellow Sweater",
    image: "sweater-yellow",
    description: "A sweater that offers high levels of comfort and warmth.",
    price: 99000,
    category: "Sweater",
    stock: 10,
    color: "#E4D793",
  },
  {
    id: 18,
    name: "Yellow Signature T-shirt",
    image: "baju-yellow-signature",
    description: "A comfy top made of 100% cotton for Men",
    price: 129000,
    category: "Signature",
    stock: 10,
    color: "#fde97f",
  },
  {
    id: 19,
    name: "Black T-shirt",
    image: "baju-black",
    description: "A comfy top made of 100% cotton for Men",
    price: 129000,
    category: "T-shirt",
    stock: 10,
    color: "#626669",
  },
  {
    id: 20,
    name: "Green T-shirt",
    image: "baju-green",
    description: "A comfy top made of 100% cotton for Men",
    price: 129000,
    category: "T-shirt",
    stock: 10,
    color: "#3EA590",
  },
  {
    id: 21,
    name: "Red T-shirt",
    image: "baju-red",
    description: "A comfy top made of 100% cotton for Men",
    price: 129000,
    category: "T-shirt",
    stock: 10,
    color: "#BB4B63",
  },
  {
    id: 22,
    name: "Yellow T-shirt",
    image: "baju-yellow",
    description: "A comfy top made of 100% cotton for Men",
    price: 129000,
    category: "T-shirt",
    stock: 10,
    color: "#E4D793",
  },
  {
    id: 23,
    name: "Pink Tote Bag",
    image: "tote-pink",
    description: "A minimalist totebag to bring your essentials.",
    price: 79000,
    category: "Tote Bag",
    stock: 10,
    color: "#C39DBA",
  },
  {
    id: 24,
    name: "Yellow Tote Bag",
    image: "tote-yellow",
    description: "A minimalist totebag to bring your essentials.",
    price: 79000,
    category: "Tote Bag",
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
