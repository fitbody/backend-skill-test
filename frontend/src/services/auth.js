import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/auth');

const service = axios.create({ withCredentials: true, baseURL });

export const signupService = (userInfo) => service.post("/signup", userInfo)
export const loginService = (userInfo) => service.post("/login", userInfo)
export const profileService = () => service.get("/profile")
export const logoutService = () => service.get("/logout")
// const AUTH_SERVICE = {
//   signup: async (user) => {
//     return await service.post('/signup', user);
//   },
//   login: async (user) => {
//     return await service.post('/login', user);
//   },
//   logOut: async () => {
//     return await service.get('/logout');
//   }
// };

// export default AUTH_SERVICE;
