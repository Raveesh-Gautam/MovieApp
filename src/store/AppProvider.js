import { useEffect, useState } from "react";
import AppContext from "./auth-context";

const AppProvider = (props) => {
  const [close, setClose] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [noCart, setNoCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/all");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);
  console.log("cart data", cart);
  useEffect(() => {
    const postProducts = async () => {
      try {
        for (let product of cart) {
          const response = await fetch("http://localhost:8080/api/store", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: product.title,
              price: product.price,
              imageUrl: product.imageUrl,
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to post product: " + product.title);
          }

          alert(` Product posted: ${product.title}`);
        }
      } catch (error) {
        console.error(" Error posting products:", error.message);
      }
    };

    postProducts();
  }, [order]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id
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
        noCart,
        setNoCart,
        products,
        order,
        setOrder,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
