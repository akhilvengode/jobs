import Tag from "../Tag";
import styles from "./index.module.css";

export type PropType = {
  isNew: boolean;
  isFeatured: boolean;
  jobTitle: string;
  companyName: string;
  postedAt: string;
  contract: string;
  location: string;
};

const Informations: React.FC<PropType> = ({
  isNew,
  isFeatured,
  jobTitle,
  companyName,
  postedAt,
  contract,
  location,
}) => {
  return (
    <div className={styles.informations}>
      <div className={styles.informations__head}>
        <div className={styles.informations__company}>{companyName}</div>
        <div className={styles.informations__features}>
          {isNew && <Tag variant="primary" text="New!" />}
          {isFeatured && <Tag variant="secondary" text="featured" />}
        </div>
      </div>
      <div className={styles.informations__role}>
        <h4>{jobTitle}</h4>
      </div>
      <div className={styles.informations__details}>
        <div>{postedAt}</div>
        <div>.</div>
        <div>{contract}</div>
        <div>.</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default Informations;
