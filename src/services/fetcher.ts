import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: '',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const fetcher = (url: string) => axiosInstance.get(url).then(res => res.data)

export default fetcher;