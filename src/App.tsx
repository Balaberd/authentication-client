import React, { useContext, useEffect } from "react";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import UsersList from "./components/UsersList/UsersList";
import Loader from "./components/Loader/Loader";
import styles from "./App.module.css";
import About from "./components/About/About";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className={styles.App}>
      <Header />

      <main className={styles.main}>
        {store.isAuth ? <UsersList /> : <About />}
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
      {store.isLoading && <Loader />}
    </div>
  );
}

export default observer(App);
