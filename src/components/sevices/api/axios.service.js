import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/';

const client = axios.create({ baseURL: BASE_API_URL });
export const get = (url, params) => client.get(url, params);
export const getTrains = (url, params) => client.get(url, { params });
