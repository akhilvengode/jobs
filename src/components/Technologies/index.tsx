import Button from "../Button";
import styles from "./index.module.css";

const Technologies: React.FC<{
  languages: Array<string>;
  filterJobs: (key: string) => void;
}> = ({ languages, filterJobs }) => (
  <div className={styles.technologies}>
    {languages.map((language, index) => (
      <Button key={index} onClick={() => filterJobs(language)}>
        {language}
      </Button>
    ))}
  </div>
);

export default Technologies;
