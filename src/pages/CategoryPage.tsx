import { useLocation } from 'react-router-dom';
import { usePopularMovies, useTopRatedMovies, useUpcomingMovies } from '../hooks/useMovies';
import { MovieGrid } from '../components/movie/MovieGrid';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { EmptyState } from '../components/common/EmptyState';

export const CategoryPage = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = '';
  let queryHook = usePopularMovies; // Default to popular to satisfy typescript

  if (path === '/popular') {
    title = 'Popular Movies';
    queryHook = usePopularMovies;
  } else if (path === '/top-rated') {
    title = 'Top Rated Movies';
    queryHook = useTopRatedMovies;
  } else if (path === '/upcoming') {
    title = 'Upcoming Movies';
    queryHook = useUpcomingMovies;
  }

  const { data, isLoading, error } = queryHook();
  const movies = data?.Search || [];

  return (
    <div className="px-6 py-8 w-full max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-bold text-black tracking-tight">{title}</h1>
        {movies.length > 0 && (
          <span className="text-sm text-grayDark font-medium">
            {movies.length} results found
          </span>
        )}
      </div>

      <div className="mt-2">
        {isLoading && <LoadingState />}
        
        {error && (
          <ErrorState message={`Failed to load ${title.toLowerCase()}.`} />
        )}
        
        {!isLoading && !error && movies.length > 0 && (
          <MovieGrid movies={movies} />
        )}
        
        {!isLoading && !error && movies.length === 0 && (
          <EmptyState message="No movies found." />
        )}
      </div>
    </div>
  );
};
