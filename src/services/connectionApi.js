import axios from "axios"

export const connectionApi = axios.create({
  baseURL: "https://tallerelectiva2.herokuapp.com/"
})