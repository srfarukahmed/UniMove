import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
export default function StudentLayout(){ const [open,setOpen]=useState(false); return <div className="app-shell"><Sidebar role="student" open={open} onClose={()=>setOpen(false)}/><div className="main-shell"><Navbar onMenu={()=>setOpen(true)}/><main className="page-content"><Outlet/></main><Footer/></div></div>; }
