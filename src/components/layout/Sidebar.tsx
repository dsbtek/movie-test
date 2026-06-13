import { NavLink } from 'react-router-dom';
import { Home, Search, Film } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Search, label: 'Search', path: '/search' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-white/5 bg-surface/50 hidden md:flex flex-col sticky top-0 h-screen">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-gradient-to-tr from-primary to-secondary p-2 rounded-xl">
          <Film className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-white tracking-tight">Cine<span className="text-primary">Scope</span></h1>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-2">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Menu</div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              twMerge(
                clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                )
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
      
      <div className="p-6">
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
          <p className="text-xs text-gray-300 font-medium mb-2">Upgrade to Pro</p>
          <p className="text-xs text-gray-500 mb-3">Get unlimited access to exclusive content.</p>
          <button className="w-full py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </aside>
  );
};
