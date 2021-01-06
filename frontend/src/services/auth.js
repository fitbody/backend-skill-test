import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = '')
  : (baseURL = 'http://localhost:3000/auth');

const service = axios.create({ withCredentials: true, baseURL });

export const signupService = (userInfo) => service.post("/auth/signup", userInfo)
export const loginService = (userInfo) => service.post("/auth/login", userInfo)
export const profileService = () => service.get("/auth/profile")
export const logoutService = () => service.get("/auth/logout")
