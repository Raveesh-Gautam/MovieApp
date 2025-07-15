import styles from "./Home.module.css";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <div>
      <HomeCard />
      <h2 className={styles.heading}>TOURS</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.date}>July 16 </span>
          <span className={styles.space}> DETROIT,ME</span>
          <span className={styles.space_des}>DTE ENERGY MUGIC THEATRE</span>
          <button className={styles.ticket}>BUY TICKET</button>
        </li>
        <hr />
        <li className={styles.li}>
          <span className={styles.date}>July 16 </span>
          <span className={styles.space}> DETROIT,ME</span>
          <span className={styles.space_des}>DTE ENERGY MUGIC THEATRE</span>
          <button className={styles.ticket}>BUY TICKET</button>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Home;
