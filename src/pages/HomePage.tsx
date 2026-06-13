import { useState } from 'react';
import { usePopularMovies, useTopRatedMovies } from '../hooks/useMovies';
import { MovieSection } from '../components/movie/MovieSection';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { SearchInput } from '../components/filters/SearchInput';
import { Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { data: popular, isLoading: loadingPopular, error: errorPopular } = usePopularMovies();
  const { data: topRated, isLoading: loadingTopRated, error: errorTopRated } = useTopRatedMovies();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  if (loadingPopular || loadingTopRated) return <LoadingState />;
  if (errorPopular || errorTopRated) return <ErrorState message="Failed to load movies." />;

  return (
    <div className="flex flex-col pb-12 w-full max-w-7xl mx-auto px-6 py-8">
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full items-start sm:items-center">
        <form onSubmit={handleSearch} className="flex-1 w-full max-w-3xl">
          <SearchInput 
            value={searchQuery} 
            onChange={setSearchQuery} 
            placeholder="Search movies..." 
          />
        </form>
        <button 
          onClick={() => navigate('/search')}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shrink-0"
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-black mb-2">Discover Movies</h1>
        <p className="text-grayDark">Find and explore your next favorite movie.</p>
      </div>

      <div className="flex flex-col gap-10">
        <MovieSection 
          title="Now Playing" 
          movies={popular?.Search || []} 
          viewAllLink="/popular"
        />
        
        <MovieSection 
          title="Popular Movies" 
          movies={topRated?.Search || []} 
          viewAllLink="/top-rated"
        />
      </div>
    </div>
  );
};
