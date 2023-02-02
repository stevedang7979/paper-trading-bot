import styles from "../styles/Prices.module.css";
import useOnScreen from "../utils/useOnScreen";
import dynamic from 'next/dynamic'

export default function Prices() {
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });

  const DynamicComponentWithNoSSR = dynamic(() => import('./CryptoChart'), {
    ssr: false
  })
  return (
    <>
      <div
        className={`${styles.prices} ${visible && "fadeBottom"}`}
        style={{ "--delay": 5 }}
        ref={ref}
        id="prices"
      >
        <div className={styles.intro}>
          <h2>ETH Price chart</h2>
          <DynamicComponentWithNoSSR />
        </div>
        

      </div>
    </>
  );
}
