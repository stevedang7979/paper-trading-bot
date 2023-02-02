import { useState } from "react";
import styles from "../styles/Equity.module.css";
import useOnScreen from "../utils/useOnScreen";
import dynamic from 'next/dynamic'

export default function Experience() {
  const [index, setIndex] = useState(0);
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });
  const DynamicComponentWithNoSSR = dynamic(() => import('./PortfolioChart'), {
    ssr: false
  })
  return (
    <div
      className={`${styles.equity} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="equity"
    >
      <div className={styles.intro}>
        <h2>Portfolio asset chart</h2>
        <DynamicComponentWithNoSSR />
      </div>
    </div>
  );
}
