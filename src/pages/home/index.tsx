import { useCallback, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Tile from "../../components/Tile";
import Informations, {
  PropType as InformationType,
} from "../../components/Informations";
import Technologies from "../../components/Technologies";
import data from "../../data.json";
import styles from "./index.module.css";
import Filter from "../../components/Filter";

const Home: React.FC = () => {
  const [jobs, setJobs] = useState(data);
  const [filterList, setFilteredList] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (filterList.size) {
      const filterd = data.filter(({ languages }) =>
        languages.some((language) => filterList.has(language))
      );
      setJobs(filterd);
    }
  }, [filterList]);

  const filterJobs = useCallback(
    (key: string) => {
      const filtered = new Set(filterList);
      filtered.add(key);
      setFilteredList(filtered);
    },
    [filterList]
  );

  const removeHandler = useCallback(
    (key: string) => {
      const filtered = new Set(filterList);
      filtered.delete(key);
      setFilteredList(filtered);
    },
    [filterList]
  );

  const clearHandler = useCallback(() => {
    setFilteredList(new Set());
    setJobs(data);
  }, []);

  const informationAndTechnology = (
    informationProps: InformationType,
    technologyProps: {
      languages: Array<string>;
      filterJobs: (key: string) => void;
    }
  ) => {
    return (
      <div className={styles.home__info}>
        <Informations {...informationProps} />
        <Technologies {...technologyProps} />
      </div>
    );
  };

  return (
    <Layout>
      {!!filterList.size && (
        <div className={styles.home__filter}>
          <Filter
            filterList={Array.from(filterList)}
            removeHandler={removeHandler}
            clearHandler={clearHandler}
          />
        </div>
      )}
      <div className={styles.home__tiles}>
        {jobs.map((info) => {
          const {
            id,
            company,
            logo,
            new: isNew,
            featured,
            position,
            postedAt,
            contract,
            location,
            languages,
          } = info;

          const informationProps = {
            isNew,
            isFeatured: featured,
            companyName: company,
            jobTitle: position,
            postedAt,
            contract,
            location,
          };

          const technologyProps = { languages, filterJobs };

          return (
            <Tile key={id} logo={logo}>
              {informationAndTechnology(informationProps, technologyProps)}
            </Tile>
          );
        })}
      </div>
    </Layout>
  );
};

export default Home;
