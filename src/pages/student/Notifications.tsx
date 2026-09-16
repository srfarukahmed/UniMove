import { Bell, CheckCheck } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import { notifications as seed } from '../../data/mock';
export default function Notifications(){ const [items,setItems]=useState(seed); const readAll=()=>setItems(v=>v.map(n=>({...n,read:true}))); return <><PageHeader title="Notifications" subtitle="Reservation, delay, cancellation and waiting-list updates." action={<button className="btn secondary" onClick={readAll}><CheckCheck size={15}/> Mark all read</button>}/>{items.map(n=><div key={n.id} className={`notification-card ${!n.read?'unread':''}`}><div className="notification-dot"><Bell size={16}/></div><div className="notification-copy"><b>{n.title}</b><p>{n.message}</p><small>{n.time}</small></div>{!n.read&&<span className="badge active">New</span>}</div>)}</> }
