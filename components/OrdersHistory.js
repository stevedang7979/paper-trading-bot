import styles from "../styles/OrdersHistory.module.css";
import { useState, useEffect } from "react";
import useOnScreen from "../utils/useOnScreen";
import dynamic from 'next/dynamic'
export default function OrdersHistory() {
  const [ref, visible] = useOnScreen({ rootMargin: "-100px" });
  const DynamicComponentWithNoSSR = dynamic(() => import('./OrdersHistoryChart'), {
    ssr: false
  })
  return (
    <div
      className={`${styles.OrdersHistory} ${visible && "fadeBottom"}`}
      style={{ "--delay": 5 }}
      ref={ref}
      id="ordersHistory"
    >
      <div className={styles.intro}>
          <h2>Orders history</h2>
          <DynamicComponentWithNoSSR />
        </div>
      
    </div>
  );
}
