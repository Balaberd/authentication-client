import axios from "axios";

import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import { API_URL } from "../http";
import { AuthResponse } from "../models/AuthResponse";

export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;
  loginError = "";
  signupError = "";

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  login = async (email: string, password: string) => {
    this.loginError = "";
    // this.setLoading(true);

    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      this.loginError = e.response?.data?.message;
      console.log(e);
    } finally {
      // this.setLoading(false);
    }
  };

  registration = async (email: string, password: string) => {
    this.signupError = "";
    // this.setLoading(true);
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      this.signupError = e.response?.data?.message;
      console.log(e.response?.data?.message);
    } finally {
      // this.setLoading(false);
    }
  };

  logout = async () => {
    // this.setLoading(true);
    try {
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      // this.setLoading(false);
    }
  };

  checkAuth = async () => {
    // this.setLoading(true);

    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      // this.setLoading(false);
    }
  };
}
