import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type ShoppingContextProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
  base64String: string;
};

type ProductItem = {
  id: number;
  type: string;
  title: string;
  breed: string;
  base64String: string;
  user_id: number;
  price: number;
};

interface ShoppingContextType {
  cartQty: number;
  totalPrice: number;
  cartItems: CartItem[];
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  addCartItem: (item: ProductItem) => void;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
}

const ShoppingContext = createContext<ShoppingContextType>(
  {} as ShoppingContextType
);

export const useShoppingContext = () => {
  return useContext(ShoppingContext);
};

export const ShoppingContextProvider = ({
  children,
}: ShoppingContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const jsonCartData = localStorage.getItem("shopping_cart");
    return jsonCartData ? JSON.parse(jsonCartData) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const increaseQty = (id: number) => {
    console.log("increaseQty => ", id);
    const currentCartItem = cartItems.find((item) => item.id === id);
    if (currentCartItem) {
      const newItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      setCartItems(newItems);
    }
  };

  const decreaseQty = (id: number) => {
    console.log("decreaseQty => ", id);
    const currentCartItem = cartItems.find((item) => item.id === id);
    if (currentCartItem) {
      if (currentCartItem.qty == 1) {
        removeCartItem(id);
      } else {
        const newItems = cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      }
    }
  };

  const addCartItem = (product: ProductItem) => {
    console.log("product=> ", product);
    if (product) {
      const currentCartItem = cartItems.find((item) => item.id === product.id);
      if (currentCartItem) {
        const newItems = cartItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        setCartItems(newItems);
      } else {
        const newItem = { ...product, qty: 1 };
        setCartItems([...cartItems, newItem]);
      }
    }
  };

  const removeCartItem = (id: number) => {
    console.log("removeCartItem => ", id);
    const currentCartItemIndex = cartItems.findIndex((item) => item.id === id);
    const newItems = [...cartItems];
    newItems.splice(currentCartItemIndex, 1);
    setCartItems(newItems);
  };

  const clearCart = () => {
    console.log("clearCart => ");
    setCartItems([]);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
        cartQty,
        totalPrice,
        increaseQty,
        decreaseQty,
        addCartItem,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
