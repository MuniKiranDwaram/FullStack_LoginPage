import axios  from "axios";

const API = axios.create({ baseURL: "http://localhost:4070" });

export const login = (formData) => API.post("/login/login",formData);
export const register = (formData) => API.post("/register/createUser",formData); 