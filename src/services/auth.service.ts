import api from './api';
export const authService = { login:(payload:{email:string;password:string})=>api.post('/auth/login',payload), register:(payload:unknown)=>api.post('/auth/register',payload), profile:()=>api.get('/auth/me'), changePassword:(payload:unknown)=>api.put('/auth/password',payload) };
