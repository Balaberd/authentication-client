import { useState, useContext } from "react";
import styles from "./Form.module.css";
import Button from "../../Button/Button";
import { createInputOnChangeHandler } from "./helpers";
import { Context } from "../../..";
import Icon from "../../Icon/Icon";
import Input from "../../Input/Input";
import { observer } from "mobx-react-lite";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store } = useContext(Context);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.Form}>
      <legend className="visually-hidden">Регистрация</legend>
      <p className={styles.error}>{store.signupError}</p>

      <Input
        prefix={<Icon iconName="user" className={styles.icon} />}
        value={name}
        type="text"
        placeholder="Введите имя"
        onChange={createInputOnChangeHandler(setName)}
      />
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
      <Button classNames={styles.submitButton} onClick={() => store.registration(email, password)}>
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default observer(SignupForm);
