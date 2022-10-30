import axios from "axios"

export const connectionApi = axios.create({
  baseURL: "http://localhost:8080/"
})