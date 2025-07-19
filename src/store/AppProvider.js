import { useEffect, useState } from "react";
import AppContext from "./auth-context";

const AppProvider = (props) => {
  const [close, setClose] = useState("");
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [noCart, setNoCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loginError, setLoginError] = useState(null);

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

  const loginHandler = async (email, password, navigate) => {
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD-93uQwvBG0C8_WD6HtONEwK9Zj9MwIfQ`,
        {
          method: "POST",
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message || "Authentication failed!");
      }

      setToken(data.idToken);
      setIsLogin(true);
      localStorage.setItem("token", data.idToken);
      navigate("/store");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    setIsLogin(false);
    localStorage.removeItem("token");
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
        isLogin,
        token,
        loginHandler,
        logoutHandler,
        loginError,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
