import axios from 'axios';
const env = (import.meta as ImportMeta & { env?: Record<string, string> }).env;
const api = axios.create({ baseURL: env?.VITE_API_URL || '/api', timeout: 10000 });
api.interceptors.request.use(config=>{ const token=localStorage.getItem('unimove_token'); if(token) config.headers.Authorization=`Bearer ${token}`; return config; });
export default api;
