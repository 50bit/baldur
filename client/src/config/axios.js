import axios from 'axios';
const user = localStorage.user ? JSON.parse(localStorage.user) : '';
export const baseURL = 'http://localhost:5000';
export const HTTP = axios.create({
  baseURL: `${baseURL}/api/`,
  headers: {
    Authorization: `Bearer ${user.token}`,
  },
});
