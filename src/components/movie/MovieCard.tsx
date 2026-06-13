import { Link } from 'react-router-dom';
import { OMDbMovieSummary } from '../../api/types';


export const MovieCard = ({ movie }: { movie: OMDbMovieSummary }) => {
  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop';
  
  return (
    <Link to={`/movie/${movie.imdbID}`} className="group relative flex flex-col gap-3">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-surface transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        <img 
          src={poster} 
          alt={movie.Title} 
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors">
            View Details
          </button>
        </div>
      </div>
      
      <div>
        <h3 className="text-white font-medium text-sm line-clamp-1 group-hover:text-primary transition-colors">{movie.Title}</h3>
        <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
          <span>{movie.Year}</span>
          <span>•</span>
          <span className="capitalize">{movie.Type}</span>
        </div>
      </div>
    </Link>
  );
};
