import React, { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";

import styles from "./Header.module.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const Header: FC = () => {
  const { store } = useContext(Context);

  return (
    <header className={styles.Header}>
      {store.isAuth ? (
        <div className={styles.userInfo}>
          <span className={styles.userMail}>{store.user.email}</span>
          <Button classNames={styles.button} onClick={store.logout}>
            Выйти
          </Button>
          <div className={styles.avatar}>
            <Icon className={styles.icon} iconName="user" />
          </div>
        </div>
      ) : (
        <div className={styles.buttonLink}>
          <Button isLink path="/auth">
            ВХОД
          </Button>
        </div>
      )}
    </header>
  );
};

export default observer(Header);
