import axios from "axios";

const API_URL = "http://localhost:8080/";

export const register = async (
  username: string,
  password: string,
  email: string
) => {
  const response = await axios.post(`${API_URL}register`, {
    username,
    password,
    email,
  });
  if (response.data) {
    const user = {
      token: response.data.token,
      user: response.data.user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
};

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}login`, { username, password });
  if (response.data) {
    const user = {
      token: response.data.token,
      user: response.data.user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};
