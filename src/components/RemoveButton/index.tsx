import styles from "./index.module.css";

type PropType = {
  text: string;
  onClick: () => void;
};

const RemoveButton: React.FC<PropType> = ({ text, onClick }) => {
  return (
    <div className={styles["remove-button"]}>
      <div className={styles["remove-button__text"]}>{text}</div>
      <button
        className={styles["remove-button__button"]}
        type="button"
        onClick={onClick}
      >
        X
      </button>
    </div>
  );
};

export default RemoveButton;
