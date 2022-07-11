import axios from "axios";

const API_URL = "http://localhost:8000/user";

const login = (email, password) => {
  return axios
    .post(API_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout
};

export default authService;