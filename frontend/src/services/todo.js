import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/todo');

const service = axios.create({ withCredentials: true, baseURL });

export const createService = (userInfo) => service.post("/create", userInfo)
export const deleteService = (userInfo) => service.post("/delete", userInfo)
export const todosService = () => service.get("/todos")
export const todoService = (id) => service.get(`/info/${id}`)