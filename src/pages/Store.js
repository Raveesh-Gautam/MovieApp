import Products from "../components/products/Products";
import Card from "./Card";
import styles from "./Store.module.css";
const Store = () => {
  return (
    <div>
      <Card />
      <h2 className={styles.heading}>Music</h2>
      <Products />
    </div>
  );
};

export default Store;
