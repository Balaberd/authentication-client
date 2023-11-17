import RotatingCard from "../RotatingCard/RotatingCard";
import SignupForm from "./Forms/SignupForm";
import LoginFofm from "./Forms/LoginForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import styles from "./Auth.module.css";

const Auth = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  if (store.isAuth) {
    navigate(-1);
  }

  return (
    <div className={styles.wrapper}>
      <RotatingCard
        frontTitle="Вход"
        fronCard={<LoginFofm />}
        backTitle="Регистрация"
        backCard={<SignupForm />}
      />
    </div>
  );
};

export default observer(Auth);
