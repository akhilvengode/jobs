import styles from "./index.module.css";

const Tile: React.FC<{ logo: string }> = ({ logo, children }) => {
  return (
    <section className={styles.tile}>
      <div className={styles.tile__logo}>
        <img src={process.env.PUBLIC_URL + logo} alt="company logo" />
      </div>
      <div className={styles.tile__content}>{children}</div>
    </section>
  );
};

export default Tile;
