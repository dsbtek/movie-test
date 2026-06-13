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

export const SearchPage = () => {
  const { filters, setSearchQuery } = useFilters();
  const [localQuery, setLocalQuery] = useState(filters.searchQuery);
  const debouncedQuery = useDebounce(localQuery, 500);

  useEffect(() => {
    setSearchQuery(debouncedQuery);
  }, [debouncedQuery, setSearchQuery]);

  const { data, isLoading, error } = useSearchMovies(filters.searchQuery);

  // Filter the results locally since OMDb search endpoint doesn't support direct filtering by year or type robustly
  const filteredMovies = data?.Search?.filter(movie => {
    if (filters.year && movie.Year !== filters.year) return false;
    if (filters.type && movie.Type !== filters.type) return false;
    return true;
  });

  return (
    <div className="px-4 md:px-8 py-8 w-full max-w-7xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-white tracking-tight">Discover</h1>
        <p className="text-gray-400">Find your favorite movies, series, and more.</p>
        
        <div className="mt-4">
          <SearchInput 
            value={localQuery} 
            onChange={setLocalQuery} 
            placeholder="Type to search..." 
          />
        </div>
        
        <FilterBar />
      </div>

      <div className="mt-8">
        {!filters.searchQuery && (
          <EmptyState message="Start typing to search for movies..." />
        )}
        
        {filters.searchQuery && isLoading && <LoadingState />}
        
        {filters.searchQuery && error && (
          <ErrorState message="Failed to load search results." />
        )}
        
        {filters.searchQuery && !isLoading && !error && filteredMovies && filteredMovies.length > 0 && (
          <MovieGrid movies={filteredMovies} />
        )}
        
        {filters.searchQuery && !isLoading && !error && (!filteredMovies || filteredMovies.length === 0) && (
          <EmptyState message="No movies found matching your criteria." />
        )}
      </div>
    </div>
  );
};
