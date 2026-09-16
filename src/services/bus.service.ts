import api from './api';
export const busService = { list:()=>api.get('/buses'), create:(payload:unknown)=>api.post('/buses',payload), update:(id:number,payload:unknown)=>api.put(`/buses/${id}`,payload), remove:(id:number)=>api.delete(`/buses/${id}`) };
