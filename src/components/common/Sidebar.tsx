import {
  Activity, BarChart3, Bell, BookOpenCheck, Bus, CalendarDays, CircleUserRound, ClipboardList, Gauge,
  LocateFixed, Map, MapPin, MessageSquareText, QrCode, Route, Settings, ShieldAlert, TicketCheck,
  Users, UserRoundCog, Wrench, X, LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

type NavItem = { label:string; to:string; icon: typeof Gauge };
const studentNav: NavItem[] = [
  {label:'Dashboard',to:'/student',icon:Gauge},{label:'Search Shuttle',to:'/student/search',icon:Bus},{label:'Routes',to:'/student/routes/1',icon:Route},
  {label:'Schedule',to:'/student/schedule',icon:CalendarDays},{label:'My Reservations',to:'/student/reservations',icon:TicketCheck},{label:'QR Pass',to:'/student/qr-pass',icon:QrCode},
  {label:'Track Bus',to:'/student/track',icon:LocateFixed},{label:'Notifications',to:'/student/notifications',icon:Bell},{label:'Feedback',to:'/student/feedback',icon:MessageSquareText},
  {label:'Report Issue',to:'/student/report-issue',icon:ShieldAlert},{label:'Profile',to:'/student/profile',icon:CircleUserRound},
];
const adminNav: NavItem[] = [
  {label:'Dashboard',to:'/admin',icon:Gauge},{label:'Students',to:'/admin/students',icon:Users},{label:'Drivers',to:'/admin/drivers',icon:UserRoundCog},{label:'Buses',to:'/admin/buses',icon:Bus},
  {label:'Routes',to:'/admin/routes',icon:Route},{label:'Stops',to:'/admin/stops',icon:MapPin},{label:'Schedules',to:'/admin/schedules',icon:CalendarDays},{label:'Trips',to:'/admin/trips',icon:Map},
  {label:'Reservations',to:'/admin/reservations',icon:TicketCheck},{label:'Waiting List',to:'/admin/waiting-list',icon:ClipboardList},{label:'Live Tracking',to:'/admin/live-tracking',icon:LocateFixed},
  {label:'Boarding',to:'/admin/boarding',icon:QrCode},{label:'Maintenance',to:'/admin/maintenance',icon:Wrench},{label:'Incidents',to:'/admin/incidents',icon:ShieldAlert},
  {label:'Notifications',to:'/admin/notifications',icon:Bell},{label:'Reports',to:'/admin/reports',icon:BookOpenCheck},{label:'Analytics',to:'/admin/analytics',icon:BarChart3},
  {label:'Settings',to:'/admin/settings',icon:Settings},{label:'Profile',to:'/admin/profile',icon:CircleUserRound},
];
export default function Sidebar({ role, open, onClose }: { role:'student'|'admin'; open:boolean; onClose:()=>void }) {
  const { logout } = useAuth();
  const items = role === 'student' ? studentNav : adminNav;
  return <><aside className={`sidebar ${open?'open':''}`}>
    <div className="brand-row"><NavLink to={`/${role}`} className="brand"><span className="brand-mark"><Bus size={21}/></span><span>Uni<span>Move</span></span></NavLink><button className="icon-btn sidebar-close" onClick={onClose}><X size={20}/></button></div>
    <div className="role-pill"><Activity size={14}/>{role === 'student' ? 'Student Portal' : 'Admin Console'}</div>
    <nav className="side-nav">{items.map(item=><NavLink end={item.to===`/${role}`} key={item.to} to={item.to} onClick={onClose} className={({isActive})=>isActive?'active':''}><item.icon size={18}/><span>{item.label}</span></NavLink>)}</nav>
    <button className="logout-btn" onClick={logout}><LogOut size={18}/> Sign Out</button>
  </aside>{open && <div className="sidebar-overlay" onClick={onClose}/>}</>;
}
