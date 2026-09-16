import api from './api';
export const trackingService = { bus:(id:number)=>api.get(`/tracking/bus/${id}`), active:()=>api.get('/tracking/active') };
