import { Link } from 'react-router-dom';
import { Film, Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full glass md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-primary to-secondary p-1.5 rounded-lg">
            <Film className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-white">Cine<span className="text-primary">Scope</span></span>
        </Link>
        
        <button className="text-gray-400 hover:text-white transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};
