import { NavLink } from 'react-router-dom';
import { Home, Search, Film, Star, Calendar } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Star, label: 'Popular', path: '/popular' },
  { icon: Search, label: 'Top Rated', path: '/top-rated' },
  { icon: Calendar, label: 'Upcoming', path: '/upcoming' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-gray-200 bg-white hidden md:flex flex-col sticky top-0 h-screen">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-1.5 rounded-lg">
          <Film className="w-5 h-5 text-white" />
        </div>
        <h1 className="text-xl font-bold text-black tracking-tight">MovieHub</h1>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              twMerge(
                clsx(
                  'flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200',
                  isActive 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-grayDark hover:bg-grayLight hover:text-black'
                )
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

