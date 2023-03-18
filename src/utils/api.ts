import axios from "axios"

export const axiosInstance = axios.create({
  baseURL:
    "https://44zx10bwsj.execute-api.us-west-1.amazonaws.com/dev/api/v1/blog",
  timeout: 3000,
  headers: {
    "x-api-key": process.env.API_KEY,
  },
})

export const proxyInstance = axios.create({
  baseURL: "/api",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.API_KEY,
  },
})
