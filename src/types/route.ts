export interface ShuttleStop {
  id: number;
  name: string;
  sequence: number;
  lat: number;
  lng: number;
}
export interface ShuttleRoute {
  id: number;
  name: string;
  code: string;
  origin: string;
  destination: string;
  distanceKm: number;
  durationMin: number;
  stops: ShuttleStop[];
  status: 'active' | 'inactive';
}
