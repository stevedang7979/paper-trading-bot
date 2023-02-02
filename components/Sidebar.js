import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import Button from "./Button";
import Icon from "./Icon";
import X from "../svgs/X";

export default function Sidebar(props) {
  const { sidebar, setSidebar } = props;

  function handleClose() {
    setSidebar((sidebar) => !sidebar);
  }
  return (
    <div className={`${styles.sidebar} ${sidebar && styles.active}`}>
      <div className={styles.close}>
        <Button icon onClick={handleClose}>
          <Icon>
            <X />
          </Icon>
        </Button>
      </div>
      <div className={styles.list}>
        <Link href="#" passHref>
          <a className={styles.link} onClick={handleClose}>
            Home
          </a>
        </Link>
        <Link href="#prices" passHref>
          <a className={styles.link} onClick={handleClose}>
            Prices
          </a>
        </Link>
        <Link href="#equity" passHref>
          <a className={styles.link} onClick={handleClose}>
            Equity
          </a>
        </Link>
        <Link href={"#ordersHistory"} passHref>
          <a className={styles.link} onClick={handleClose}>
            Order history
          </a>
        </Link>
      </div>
    </div>
  );
}
