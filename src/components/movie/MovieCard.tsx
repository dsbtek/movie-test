import { Link } from 'react-router-dom';
import { OMDbMovieSummary } from '../../api/types';
import { Star } from 'lucide-react';

export const MovieCard = ({ movie }: { movie: OMDbMovieSummary }) => {
  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop';
  
  // Mocking rating since OMDb search results don't have it natively
  const mockedRating = (Math.random() * 3 + 6).toFixed(1);

  return (
    <Link to={`/movie/${movie.imdbID}`} className="group relative flex flex-col gap-3 w-full">
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <img 
          src={poster} 
          alt={movie.Title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-xs font-bold">{mockedRating}</span>
        </div>
      </div>
      
      <div className="px-1">
        <h3 className="text-black font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {movie.Title}
        </h3>
        <p className="text-grayDark text-xs mt-1 font-medium">{movie.Year}</p>
      </div>
    </Link>
  );
};

