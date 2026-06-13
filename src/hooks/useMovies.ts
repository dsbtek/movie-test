import { useQuery } from '@tanstack/react-query';
import { movieApi } from '../api/endpoints';

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: movieApi.getPopularMovies,
  });
};

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ['movies', 'topRated'],
    queryFn: movieApi.getTopRatedMovies,
  });
};

export const useSearchMovies = (query: string, page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'search', query, page],
    queryFn: () => movieApi.searchMovies(query, page),
    enabled: !!query,
  });
};

export const useMovieDetails = (id: string) => {
  return useQuery({
    queryKey: ['movies', 'details', id],
    queryFn: () => movieApi.getMovieDetails(id),
    enabled: !!id,
  });
};
