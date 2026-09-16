import api from './api';
export const reservationService = { my:()=>api.get('/reservations/my'), reserve:(payload:unknown)=>api.post('/reservations',payload), cancel:(id:number)=>api.delete(`/reservations/${id}`), all:()=>api.get('/reservations') };
