import { ChevronRight } from 'lucide-react';
import { OMDbMovieSummary } from '../../api/types';
import { MovieCard } from './MovieCard';
import { Link } from 'react-router-dom';

interface MovieSectionProps {
  title: string;
  movies: OMDbMovieSummary[];
  viewAllLink?: string;
}

export const MovieSection = ({ title, movies, viewAllLink }: MovieSectionProps) => {
  return (
    <section className="py-6">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
        {viewAllLink && (
          <Link to={viewAllLink} className="text-sm text-primary hover:text-blue-400 font-medium flex items-center transition-colors">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        )}
      </div>
      
      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="w-[160px] sm:w-[200px] flex-shrink-0">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};
