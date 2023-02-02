import styles from "../styles/Popup.module.css";

export default function Popup({ active, children }) {
  return (
    <div className={`popup ${styles.popup} ${active && styles.active}`}>
      {children}
    </div>
  );
}
