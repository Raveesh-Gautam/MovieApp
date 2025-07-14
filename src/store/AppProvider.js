import { useState } from "react";
import AppContext from "./auth-context";

const AppProvider = (props) => {
  const [close, setClose] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.item === product.item
      );

      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        close,
        setClose,
        cart,
        setCart,
        quantity,
        setQuantity,
        addToCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
