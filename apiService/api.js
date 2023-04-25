import axios from "axios";

const api = axios.create({
    baseURL: 'https://versel-server-ten.vercel.app/'
})

export default api;