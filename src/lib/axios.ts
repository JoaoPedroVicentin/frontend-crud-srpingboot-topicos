import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://crud-springboot-topicos.onrender.com/',
})