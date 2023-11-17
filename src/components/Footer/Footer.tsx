import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles.description}>
        Made by <a href="https://github.com/Balaberd">Balaberd</a>
      </p>
    </footer>
  );
};

export default observer(Footer);
