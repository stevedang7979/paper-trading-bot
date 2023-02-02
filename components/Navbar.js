import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Button from "./Button";
import Icon from "./Icon";
import Menu from "../svgs/Menu";
import useScrollHide from "../utils/useScrollHide";
import useThemeChange from "../utils/useThemeChange";

export default function Navbar({ handleSidebar }) {
  const visible = useScrollHide();
  const { theme, handleThemeChange } = useThemeChange();
  return (
    <header className={`${styles.navbar} ${!visible && styles.hidden}`}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.hide}>
          {/* <Button icon animate onClick={handleThemeChange}>
            <Icon>{theme === "light" ? <DarkToggle /> : <LightToggle />}</Icon>
          </Button> */}
          <Button icon animate onClick={handleSidebar}>
            <Icon>
              <Menu />
            </Icon>
          </Button>
        </div>
        <div className={styles.links}>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 2 }}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 3 }}
              >
                <Link href="#prices">Prices</Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 4 }}
              >
                <Link href="#equity">Equity</Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 5 }}
              >
                <Link href="#ordersHistory">Orders History</Link>
              </li>
              <li
                className={`${styles.item} fadeBottom`}
                style={{ "--delay": 6 }}
              >
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.right}>         
          {/* <Button icon onClick={handleThemeChange} animate>
            <Icon>{theme === "light" ? <DarkToggle /> : <LightToggle />}</Icon>
          </Button> */}
        </div>
      </div>
    </header>
  );
}
