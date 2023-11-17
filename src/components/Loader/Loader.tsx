import { FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.card}>загрузка...</div>
    </div>
  );
};

export default Loader;
