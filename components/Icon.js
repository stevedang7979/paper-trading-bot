import styles from "../styles/Icon.module.css";

export default function Icon(props) {
  return <i className={styles.icon}>{props.children}</i>;
}
