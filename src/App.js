import { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import Products from "./components/products/Products";
import AppProvider from "./store/AppProvider";

const App = () => {
  return (
    <div>
      <AppProvider>
        <Header />
        <Products />
        <Cart   />
      </AppProvider>
    </div>
  );
};

export default App;
