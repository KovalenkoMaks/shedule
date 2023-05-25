import axios from 'axios';

const BASE_API_URL = 'http://localhost:8080/';

const client = axios.create({ baseURL: BASE_API_URL });
export const get = (url, params) => client.get(url, params);
export const getTrains = (url, params) => client.get(url, { params });

// const post = (url, data, params) => client.post(url, data, params);
// const put = (url, data, params) => client.put(url, data, params);
// const del = (url, params) => client.delete(url, params);

// export default {
//     get,
// }
