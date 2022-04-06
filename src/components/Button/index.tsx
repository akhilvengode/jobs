import classnames from "classnames";
import styles from "./index.module.css";

type PropType = {
  type?: "button" | "submit";
  noBackgrond?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<PropType & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  type = "button",
  noBackgrond = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classnames(
        styles.button,
        noBackgrond && styles["button--no-background"],
        disabled && styles["button--disabled"]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
