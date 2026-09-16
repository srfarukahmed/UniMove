import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';
import StudentLayout from './layouts/StudentLayout';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import StudentDashboard from './pages/student/Dashboard';
import SearchShuttle from './pages/student/SearchShuttle';
import RouteDetails from './pages/student/RouteDetails';
import Schedule from './pages/student/Schedule';
import TripDetails from './pages/student/TripDetails';
import Reservation from './pages/student/Reservation';
import MyReservations from './pages/student/MyReservations';
import QRPass from './pages/student/QRPass';
import TrackBus from './pages/student/TrackBus';
import StudentNotifications from './pages/student/Notifications';
import Feedback from './pages/student/Feedback';
import ReportIssue from './pages/student/ReportIssue';
import StudentProfile from './pages/student/Profile';
import AdminDashboard from './pages/admin/Dashboard';
import Students from './pages/admin/Students';
import Drivers from './pages/admin/Drivers';
import Buses from './pages/admin/Buses';
import AdminRoutes from './pages/admin/Routes';
import Stops from './pages/admin/Stops';
import Schedules from './pages/admin/Schedules';
import Trips from './pages/admin/Trips';
import Reservations from './pages/admin/Reservations';
import WaitingList from './pages/admin/WaitingList';
import LiveTracking from './pages/admin/LiveTracking';
import Boarding from './pages/admin/Boarding';
import Maintenance from './pages/admin/Maintenance';
import Incidents from './pages/admin/Incidents';
import AdminNotifications from './pages/admin/Notifications';
import Reports from './pages/admin/Reports';
import Analytics from './pages/admin/Analytics';
import Settings from './pages/admin/Settings';
import AdminProfile from './pages/admin/Profile';
import { useAuth } from './hooks/useAuth';

function HomeRedirect(){ const {user}=useAuth(); return <Navigate to={user?`/${user.role}`:'/login'} replace/>; }

export default function App(){
  return <Routes>
    <Route path="/" element={<HomeRedirect/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

    <Route element={<ProtectedRoute role="student"/>}>
      <Route path="/student" element={<StudentLayout/>}>
        <Route index element={<StudentDashboard/>}/>
        <Route path="search" element={<SearchShuttle/>}/>
        <Route path="routes/:id" element={<RouteDetails/>}/>
        <Route path="schedule" element={<Schedule/>}/>
        <Route path="trips/:id" element={<TripDetails/>}/>
        <Route path="reserve/:tripId" element={<Reservation/>}/>
        <Route path="reservations" element={<MyReservations/>}/>
        <Route path="qr-pass" element={<QRPass/>}/>
        <Route path="track" element={<TrackBus/>}/>
        <Route path="notifications" element={<StudentNotifications/>}/>
        <Route path="feedback" element={<Feedback/>}/>
        <Route path="report-issue" element={<ReportIssue/>}/>
        <Route path="profile" element={<StudentProfile/>}/>
      </Route>
    </Route>

    <Route element={<ProtectedRoute role="admin"/>}>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<AdminDashboard/>}/>
        <Route path="students" element={<Students/>}/>
        <Route path="drivers" element={<Drivers/>}/>
        <Route path="buses" element={<Buses/>}/>
        <Route path="routes" element={<AdminRoutes/>}/>
        <Route path="stops" element={<Stops/>}/>
        <Route path="schedules" element={<Schedules/>}/>
        <Route path="trips" element={<Trips/>}/>
        <Route path="reservations" element={<Reservations/>}/>
        <Route path="waiting-list" element={<WaitingList/>}/>
        <Route path="live-tracking" element={<LiveTracking/>}/>
        <Route path="boarding" element={<Boarding/>}/>
        <Route path="maintenance" element={<Maintenance/>}/>
        <Route path="incidents" element={<Incidents/>}/>
        <Route path="notifications" element={<AdminNotifications/>}/>
        <Route path="reports" element={<Reports/>}/>
        <Route path="analytics" element={<Analytics/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="profile" element={<AdminProfile/>}/>
      </Route>
    </Route>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>;
}
