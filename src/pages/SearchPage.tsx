import { useState, useEffect } from 'react';
import { useSearchMovies } from '../hooks/useMovies';
import { useDebounce } from '../hooks/useDebounce';
import { useFilters } from '../store/filterStore';
import { MovieGrid } from '../components/movie/MovieGrid';
import { SearchInput } from '../components/filters/SearchInput';
import { FilterBar } from '../components/filters/FilterBar';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { EmptyState } from '../components/common/EmptyState';
import { Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q');
  
  const { filters, setSearchQuery } = useFilters();
  const [localQuery, setLocalQuery] = useState(queryParam || filters.searchQuery || 'batman');
  const debouncedQuery = useDebounce(localQuery, 500);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  const { data, isLoading, error } = useSearchMovies(filters.searchQuery || 'batman');

  // Filter the results locally since OMDb search endpoint doesn't support direct filtering by year or type robustly
  const filteredMovies = data?.Search?.filter(movie => {
    if (filters.year && movie.Year !== filters.year) return false;
    // skip type filter since we mock genre with type and omdb only supports type=movie/series/episode
    return true;
  });

  return (
    <div className="px-6 py-8 w-full max-w-7xl mx-auto flex flex-col gap-8">
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row gap-4 w-full items-start sm:items-center">
        <div className="flex-1 w-full max-w-3xl">
          <SearchInput 
            value={localQuery} 
            onChange={setLocalQuery} 
            placeholder="Search movies..." 
          />
        </div>
        <button 
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shrink-0"
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between">
          <h1 className="text-xl font-bold text-black tracking-tight">
            Search Results for "{filters.searchQuery || 'batman'}"
          </h1>
          {filteredMovies && (
            <span className="text-sm text-grayDark font-medium">
              {filteredMovies.length} results found
            </span>
          )}
        </div>
        
        <FilterBar />
      </div>

      <div className="mt-2">
        {isLoading && <LoadingState />}
        
        {error && (
          <ErrorState message="Failed to load search results." />
        )}
        
        {!isLoading && !error && filteredMovies && filteredMovies.length > 0 && (
          <MovieGrid movies={filteredMovies} />
        )}
        
        {!isLoading && !error && (!filteredMovies || filteredMovies.length === 0) && (
          <EmptyState message="No movies found matching your criteria." />
        )}
      </div>
    </div>
  );
};
