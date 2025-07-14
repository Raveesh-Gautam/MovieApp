import { useContext } from "react";
import AppContext from "../../store/auth-context";
import products from "../productsArr";
import styles from "./Products.module.css";
const Products = () => {
  const { cart, setCart, quantity, setQuantity, addToCart } =
    useContext(AppContext);

  const handleAddCard = (id) => {
    const product = products.find((p) => p.id === id);
    const alreadyInCart = cart.find((item) => item.id === id);

    if (alreadyInCart) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className={styles.products}>
      <ul
        className={styles.products_ul}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((ele, id) => (
          <div key={id} className={styles.products_ul_key}>
            <div className={styles.manage}>
              <li className={styles.products_ul_title}>{ele.title}</li>
              <img
                className={styles.products_ul_img}
                src={ele.imageUrl}
                alt=""
              />
              <div className={styles.cardandprice}>
                <li className={styles.products_ul_price}>${ele.price}</li>
                <button
                  className={styles.addCart}
                  onClick={() => handleAddCard(ele.id)}
                >
                  ADD TO CARD
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
