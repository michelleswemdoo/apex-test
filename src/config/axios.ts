import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://apex-payments-eca4dc83534e.herokuapp.com/api/',
});
