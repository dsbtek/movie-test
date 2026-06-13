import { apiClient } from './client';
import { OMDbMovieDetails, OMDbSearchResult } from './types';

export const movieApi = {
  searchMovies: async (query: string, page: number = 1): Promise<OMDbSearchResult> => {
    const response = await apiClient.get<OMDbSearchResult>('', {
      params: { s: query, page, type: 'movie' },
    });
    if (response.data.Response === 'False') {
      throw new Error(response.data.Error || 'Failed to fetch movies');
    }
    return response.data;
  },

  getMovieDetails: async (id: string): Promise<OMDbMovieDetails> => {
    const response = await apiClient.get<OMDbMovieDetails>('', {
      params: { i: id, plot: 'full' },
    });
    if (response.data.Response === 'False') {
      throw new Error(response.data.Error || 'Failed to fetch movie details');
    }
    return response.data;
  },

  // Mocking "Popular" by searching a generic popular term
  getPopularMovies: async (): Promise<OMDbSearchResult> => {
    return movieApi.searchMovies('marvel');
  },

  // Mocking "Top Rated" by searching another popular term
  getTopRatedMovies: async (): Promise<OMDbSearchResult> => {
    return movieApi.searchMovies('lord of the rings');
  },

  // Mocking "Upcoming" by searching a different term
  getUpcomingMovies: async (): Promise<OMDbSearchResult> => {
    return movieApi.searchMovies('avatar');
  },
};
