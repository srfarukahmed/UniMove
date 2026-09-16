export type TripStatus = 'scheduled' | 'boarding' | 'active' | 'completed' | 'cancelled' | 'delayed';
export interface Trip {
  id: number;
  routeId: number;
  routeName: string;
  busNumber: string;
  driverName: string;
  date: string;
  departure: string;
  arrival: string;
  seatsAvailable: number;
  capacity: number;
  status: TripStatus;
}
