import axios from 'axios'
import { SERVER_URL } from './Constant';

export const parseJwt = (token) => {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export const setToken = (token) => {
    localStorage.setItem("token", token)
    axios.defaults.headers.common['Authorization'] = "Bearer " + token
}

export const removeToken = () => {
    localStorage.removeItem("token")
    axios.defaults.headers.common['Authorization'] = ""
}