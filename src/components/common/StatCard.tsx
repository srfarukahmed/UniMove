import type { LucideIcon } from 'lucide-react';
export default function StatCard({ icon: Icon, label, value, hint, tone='teal' }: { icon:LucideIcon; label:string; value:string|number; hint?:string; tone?:string }) {
  return <div className={`stat-card ${tone}`}><div className="stat-icon"><Icon size={21}/></div><div><span>{label}</span><strong>{value}</strong>{hint && <small>{hint}</small>}</div></div>;
}
