import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = '/todo')
  : (baseURL = 'http://localhost:3000/todo');

const service = axios.create({ withCredentials: true, baseURL });

export const createService = (userInfo) => service.post("/create", userInfo)
export const deleteService = (id) => service.post("/delete", id)
export const todosService = () => service.get("/todos")
export const todoService = (id) => service.get(`/info/${id}`)
export const isCompletedService = (userInfo) => service.post(`/completed`, userInfo)