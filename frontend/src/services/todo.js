import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = '')
  : (baseURL = 'http://localhost:3000/todo');

const service = axios.create({ withCredentials: true, baseURL });

export const createService = (userInfo) => service.post("/todo/create", userInfo)
export const deleteService = (id) => service.post("/todo/delete", id)
export const todosService = () => service.get("/todo/todos")
export const todoService = (id) => service.get(`/todo/info/${id}`)
export const isCompletedService = (userInfo) => service.post(`/todo/completed`, userInfo)