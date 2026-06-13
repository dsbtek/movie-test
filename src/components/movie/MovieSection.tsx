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
    <section>
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        {viewAllLink && (
          <Link to={viewAllLink} className="text-sm text-primary hover:text-blue-700 font-semibold transition-colors">
            View all
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};
