import styles from "../styles/Home.module.css";
import data from "../public/metadata";
import Img from "./Img";
export default function Home() {
  return (
    <div className={`${styles.home} fadeBottom`} style={{ "--delay": 12 }}>
      <div className={styles.intro}>
        <h2>Welcome to Paper Trading BOT!</h2>
        <h3>This is a trading BOT uses the Alpaca trading platform and applies algorithms to predict crypto market trends.</h3>
        <h3>Check out for the crypto market below!</h3>
      </div>
      <div className={styles.imageContainer}>
        <Img img={data.pic} imgAlt={data.pic} layout objectFit="cover" />
      </div>

    </div>
  );
}
