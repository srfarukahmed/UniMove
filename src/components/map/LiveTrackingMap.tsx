import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
const busIcon = new L.DivIcon({ className:'bus-map-marker', html:'<div>🚌</div>', iconSize:[38,38], iconAnchor:[19,19] });
export default function LiveTrackingMap({ multi=false }: { multi?:boolean }){
 const buses = multi ? [
  {id:1,name:'UM-01',pos:[23.7808,90.3995] as [number,number],eta:'8 min',status:'On route'},
  {id:2,name:'UM-03',pos:[23.7582,90.3891] as [number,number],eta:'13 min',status:'Boarding'},
  {id:3,name:'UM-05',pos:[23.7388,90.3831] as [number,number],eta:'21 min',status:'On route'},
 ] : [{id:1,name:'UM-01',pos:[23.7808,90.3995] as [number,number],eta:'8 min',status:'On route'}];
 return <div className="map-frame"><MapContainer center={[23.7705,90.397]} zoom={12} scrollWheelZoom style={{height:'100%',width:'100%'}}><TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>{buses.map(b=><Marker icon={busIcon} key={b.id} position={b.pos}><Popup><b>{b.name}</b><br/>{b.status}<br/>ETA {b.eta}</Popup></Marker>)}</MapContainer></div>;
}
