import type { Bus } from '../types/bus';
import type { Reservation } from '../types/reservation';
import type { ShuttleRoute, ShuttleStop } from '../types/route';
import type { Trip } from '../types/trip';
import type { User } from '../types/user';

export const students: User[] = [
  { id: 1, name: 'Ayesha Rahman', email: 'ayesha@student.unimove.edu', role: 'student', studentId: 'CSE-221-014', department: 'CSE', phone: '01710000001', status: 'active' },
  { id: 2, name: 'Fahim Ahmed', email: 'fahim@student.unimove.edu', role: 'student', studentId: 'EEE-221-032', department: 'EEE', phone: '01710000002', status: 'active' },
  { id: 3, name: 'Nusrat Jahan', email: 'nusrat@student.unimove.edu', role: 'student', studentId: 'BBA-222-008', department: 'BBA', phone: '01710000003', status: 'inactive' },
];

export const drivers = [
  { id: 1, name: 'Md. Kamal Hossain', phone: '01810000001', employeeId: 'DRV-001', license: 'DL-458921', experience: 8, status: 'active', assigned: 'UM-01' },
  { id: 2, name: 'Rafiqul Islam', phone: '01810000002', employeeId: 'DRV-002', license: 'DL-658214', experience: 6, status: 'active', assigned: 'UM-03' },
  { id: 3, name: 'Sajedul Karim', phone: '01810000003', employeeId: 'DRV-003', license: 'DL-774120', experience: 11, status: 'leave', assigned: '—' },
];

export const buses: Bus[] = [
  { id: 1, number: 'UM-01', registration: 'DHAKA METRO-B-15-1001', capacity: 40, model: 'Ashok Leyland Viking', status: 'active', gpsId: 'GPS-UM01', driver: 'Md. Kamal Hossain' },
  { id: 2, number: 'UM-02', registration: 'DHAKA METRO-B-15-1002', capacity: 36, model: 'Tata Starbus', status: 'maintenance', gpsId: 'GPS-UM02' },
  { id: 3, number: 'UM-03', registration: 'DHAKA METRO-B-15-1003', capacity: 40, model: 'Ashok Leyland Viking', status: 'active', gpsId: 'GPS-UM03', driver: 'Rafiqul Islam' },
];

export const stops: ShuttleStop[] = [
  { id: 1, name: 'Main Campus Gate', sequence: 1, lat: 23.7806, lng: 90.4070 },
  { id: 2, name: 'Science Lab', sequence: 2, lat: 23.7388, lng: 90.3831 },
  { id: 3, name: 'Farmgate', sequence: 3, lat: 23.7582, lng: 90.3891 },
  { id: 4, name: 'Mohakhali', sequence: 4, lat: 23.7808, lng: 90.3995 },
  { id: 5, name: 'Uttara Sector 7', sequence: 5, lat: 23.8742, lng: 90.3984 },
];

export const routes: ShuttleRoute[] = [
  { id: 1, name: 'Campus ↔ Uttara', code: 'R-01', origin: 'Main Campus Gate', destination: 'Uttara Sector 7', distanceKm: 18.4, durationMin: 55, stops, status: 'active' },
  { id: 2, name: 'Campus ↔ Dhanmondi', code: 'R-02', origin: 'Main Campus Gate', destination: 'Dhanmondi 27', distanceKm: 12.8, durationMin: 45, stops: stops.slice(0, 3), status: 'active' },
  { id: 3, name: 'Campus ↔ Mirpur', code: 'R-03', origin: 'Main Campus Gate', destination: 'Mirpur 10', distanceKm: 16.1, durationMin: 50, stops: [stops[0], stops[2], stops[3]], status: 'active' },
];

export const trips: Trip[] = [
  { id: 1, routeId: 1, routeName: 'Campus ↔ Uttara', busNumber: 'UM-01', driverName: 'Md. Kamal Hossain', date: '2026-09-17', departure: '07:30', arrival: '08:25', seatsAvailable: 12, capacity: 40, status: 'scheduled' },
  { id: 2, routeId: 2, routeName: 'Campus ↔ Dhanmondi', busNumber: 'UM-03', driverName: 'Rafiqul Islam', date: '2026-09-17', departure: '08:00', arrival: '08:45', seatsAvailable: 4, capacity: 40, status: 'boarding' },
  { id: 3, routeId: 3, routeName: 'Campus ↔ Mirpur', busNumber: 'UM-01', driverName: 'Md. Kamal Hossain', date: '2026-09-17', departure: '15:30', arrival: '16:20', seatsAvailable: 18, capacity: 40, status: 'scheduled' },
];

export const reservations: Reservation[] = [
  { id: 1, reservationNo: 'RES-260917-1001', studentName: 'Ayesha Rahman', studentId: 'CSE-221-014', route: 'Campus ↔ Uttara', tripId: 1, bus: 'UM-01', date: '2026-09-17', time: '07:30', seat: 'A-08', status: 'reserved' },
  { id: 2, reservationNo: 'RES-260916-0988', studentName: 'Ayesha Rahman', studentId: 'CSE-221-014', route: 'Campus ↔ Dhanmondi', tripId: 2, bus: 'UM-03', date: '2026-09-16', time: '08:00', seat: 'B-11', status: 'boarded' },
];

export const notifications = [
  { id: 1, title: 'Reservation confirmed', message: 'Your seat A-08 on UM-01 has been reserved.', type: 'success', time: '10 min ago', read: false },
  { id: 2, title: 'Trip delay', message: 'R-02 is running approximately 12 minutes late.', type: 'warning', time: '35 min ago', read: false },
  { id: 3, title: 'Schedule updated', message: 'Evening shuttle for Campus ↔ Mirpur now departs at 3:30 PM.', type: 'info', time: '2 hrs ago', read: true },
];
