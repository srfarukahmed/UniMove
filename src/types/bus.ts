export type BusStatus = 'active' | 'maintenance' | 'inactive';
export interface Bus {
  id: number;
  number: string;
  registration: string;
  capacity: number;
  model: string;
  status: BusStatus;
  gpsId: string;
  driver?: string;
}
