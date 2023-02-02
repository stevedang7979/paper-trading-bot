import styles from "../styles/LogoIcon.module.css";

export default function Logo(props) {
  const className = `${styles.logo} ${props.reverse && styles.reverse} ${
    props.animate && styles.animate
  } ${props.big && styles.big}`;

  return <div className={className}>{props.children}</div>;
}
