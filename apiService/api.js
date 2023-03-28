import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.107.196.15:3000'
    // baseURL: 'http://192.168.68.102:3000'
})

export default api;