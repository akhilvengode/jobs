import classnames from "classnames";
import styles from "./index.module.css";

type PropType = {
  text: string;
  variant?: "primary" | "secondary";
};

const Tag: React.FC<PropType> = ({ text, variant = "primary" }) => (
  <span className={classnames(styles.tag, styles[`tag--${variant}`])}>
    {text}
  </span>
);

export default Tag;
