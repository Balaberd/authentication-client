import { FC } from "react";
import cn from "classnames";
import styles from "./About.module.css";

const About: FC = () => {
  return (
    <section className={styles.About}>
      <h1>Пожалуйста авторизуйстесь</h1>
      <p className={styles.paragrahp}>
        При регистрации, на указаный e-mail будет направлено письмо для
        подтверждения. (подтверждать не обязательно) После авторизации будет
        доступна кнопка "Получить список пользователей", при нажатии на которую
        загружается список всех авторизованых пользователей. Получить его может
        только авторизованый пользователь.
      </p>
      <p className={styles.paragrahp}>
        Вы можете воспользоваться учетной записью:
        <br></br>
        login: <strong>user@mail.ru</strong>
        <br></br>
        password: <strong>12345</strong>
      </p>

      <p className={cn(styles.warning, styles.paragrahp)}>
        <strong>P.S.: </strong>Сервер задеплоен на сервис{" "}
        <a href="https://render.com/">Render</a>. Ответы с сервера приходят с
        длительной задержкой, а иногда клиент и вовсе не может до него
        достучаться, поэтому рекомендуется установить сервер локально
      </p>
    </section>
  );
};

export default About;
