export type ReservationStatus = 'reserved' | 'checked-in' | 'boarded' | 'cancelled' | 'waiting';
export interface Reservation {
  id: number;
  reservationNo: string;
  studentName: string;
  studentId: string;
  route: string;
  tripId: number;
  bus: string;
  date: string;
  time: string;
  seat: string;
  status: ReservationStatus;
}
