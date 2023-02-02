import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.lower}>
          <p>
            Designed & created by Phu An Dang
          </p>
        </div>
      </div>
    </footer>
  );
}
