import styles from "./index.module.css";

const Layout: React.FC = ({ children }) => (
  <div className={styles.layout}>
    <header className={styles.layout__header} />
    <div className={styles.layout__content}>{children}</div>
  </div>
);

export default Layout;
