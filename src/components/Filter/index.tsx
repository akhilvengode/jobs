import Button from "../Button";
import RemoveButton from "../RemoveButton";
import styles from "./index.module.css";

type PropType = {
  filterList: Array<string>;
  removeHandler: (key: string) => void;
  clearHandler: () => void;
};

const Filter: React.FC<PropType> = ({
  filterList,
  removeHandler,
  clearHandler,
}) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__list}>
        {filterList.map((element) => (
          <RemoveButton text={element} onClick={() => removeHandler(element)} />
        ))}
      </div>
      <Button noBackgrond onClick={clearHandler}>
        clear
      </Button>
    </div>
  );
};

export default Filter;
