import { Link } from 'react-router-dom';
import { Film, Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Film className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-black">MovieHub</span>
        </Link>
        
        <button className="text-grayDark hover:text-black transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

