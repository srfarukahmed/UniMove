import { Bell, Menu, Moon, Search, Sun } from 'lucide-react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';

export default function Navbar({ onMenu }: { onMenu: () => void }) {
  const { user } = useAuth();
  const theme = useContext(ThemeContext);
  const [query, setQuery] = useState('');
  return <header className="topbar">
    <div className="topbar-left">
      <button className="icon-btn mobile-menu" onClick={onMenu}><Menu size={20}/></button>
      <div className="top-search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search UniMove..."/></div>
    </div>
    <div className="topbar-actions">
      <button className="icon-btn" onClick={theme?.toggleTheme} aria-label="Toggle theme">{theme?.theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
      <Link to={`/${user?.role}/notifications`} className="icon-btn notify"><Bell size={18}/><i/></Link>
      <Link to={`/${user?.role}/profile`} className="profile-chip"><span className="avatar">{user?.name?.split(' ').map(v=>v[0]).slice(0,2).join('')}</span><span><b>{user?.name}</b><small>{user?.role}</small></span></Link>
    </div>
  </header>;
}
