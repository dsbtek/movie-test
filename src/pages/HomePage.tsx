import { usePopularMovies, useTopRatedMovies } from '../hooks/useMovies';
import { MovieSection } from '../components/movie/MovieSection';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

export const HomePage = () => {
  const { data: popular, isLoading: loadingPopular, error: errorPopular } = usePopularMovies();
  const { data: topRated, isLoading: loadingTopRated, error: errorTopRated } = useTopRatedMovies();

  if (loadingPopular || loadingTopRated) return <LoadingState />;
  if (errorPopular || errorTopRated) return <ErrorState message="Failed to load movies." />;

  const heroMovie = popular?.Search[0];

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Hero Section */}
      {heroMovie && (
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={heroMovie.Poster} 
            alt={heroMovie.Title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {heroMovie.Title}
            </h1>
            <div className="flex items-center gap-4 mb-6 text-gray-300 font-medium">
              <span>{heroMovie.Year}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="capitalize">{heroMovie.Type}</span>
            </div>
            
            <Link 
              to={`/movie/${heroMovie.imdbID}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
            >
              <Play className="w-5 h-5 fill-current" />
              View Details
            </Link>
          </div>
        </div>
      )}

      <div className="px-4 md:px-8 flex flex-col gap-8">
        <MovieSection 
          title="Trending Now" 
          movies={popular?.Search || []} 
        />
        
        <MovieSection 
          title="Top Rated Classics" 
          movies={topRated?.Search || []} 
        />
      </div>
    </div>
  );
};
