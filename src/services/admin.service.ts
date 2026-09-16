import api from './api';
export const adminService = { dashboard:()=>api.get('/admin/dashboard'), students:()=>api.get('/admin/students'), drivers:()=>api.get('/admin/drivers'), routes:()=>api.get('/admin/routes'), trips:()=>api.get('/admin/trips'), reports:()=>api.get('/admin/reports') };
