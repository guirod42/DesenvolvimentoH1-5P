import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.107.197.214:3000/pessoas'
})

export default api;