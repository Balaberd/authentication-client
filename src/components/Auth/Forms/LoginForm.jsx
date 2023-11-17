import { useState, useContext } from "react";
import styles from "./Form.module.css";
import Button from "../../Button/Button";
import { createInputOnChangeHandler } from "./helpers";
import { Context } from "../../..";
import Icon from "../../Icon/Icon";
import Input from "../../Input/Input";
import { observer } from "mobx-react-lite";

const LoginForm = () => {
  const [email, setEmail] = useState("user@mail.ru");
  const [password, setPassword] = useState("12345");

  const { store } = useContext(Context);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.Form}>
      <legend className="visually-hidden">Вход</legend>
      <p className={styles.error}>{store.loginError}</p>
      <Input
        prefix={<Icon iconName="email" className={styles.icon} />}
        value={email}
        type="email"
        placeholder="Введите e-mail"
        onChange={createInputOnChangeHandler(setEmail)}
      />
      <Input
        prefix={<Icon iconName="lock" className={styles.icon} />}
        value={password}
        type="password"
        placeholder="Введите пароль"
        onChange={createInputOnChangeHandler(setPassword)}
      />
      <Button
        classNames={styles.submitButton}
        onClick={() => store.login(email, password)}
      >
        Войти
      </Button>
    </form>
  );
};

export default observer(LoginForm);
