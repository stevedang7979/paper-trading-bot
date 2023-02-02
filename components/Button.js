import styles from "../styles/Button.module.css";

export default function Button(props) {
  const { icon, fill, big, onClick, animate } = props;

  const className = `${icon ? styles.iconButton : styles.button} ${
    fill && styles.fill
  } ${big && styles.big} ${animate && "fadeBottom"}`;

  function handleClick() {
    return onClick ? props.onClick() : null;
  }

  return (
    <button
      className={className}
      onClick={handleClick}
      style={{ "--delay": 7 }}
    >
      {props.children}
    </button>
  );
}
