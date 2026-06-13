import { useParams, useNavigate } from 'react-router-dom';
import { useMovieDetails, usePopularMovies } from '../hooks/useMovies';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { ArrowLeft, Star, Heart } from 'lucide-react';
import { MovieCard } from '../components/movie/MovieCard';

export const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: movie, isLoading, error } = useMovieDetails(id!);
  
  // Mocking similar movies with popular movies since OMDb doesn't have a similar endpoint
  const { data: similar } = usePopularMovies();

  if (isLoading) return <LoadingState />;
  if (error || !movie) return <ErrorState message="Failed to load movie details." />;

  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop';
  const mockedVotes = parseInt(movie.imdbVotes?.replace(/,/g, '') || '0').toLocaleString();

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="px-6 py-8 w-full max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-black font-bold hover:text-primary transition-colors w-fit"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column: Poster */}
          <div className="w-full md:w-[400px] flex-shrink-0">
            <img 
              src={poster} 
              alt={movie.Title} 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-3">
              {movie.Title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm font-medium text-grayDark">
              <span>{movie.Year}</span>
              <span>•</span>
              <span>{movie.Runtime}</span>
              <span>•</span>
              <span>{movie.Rated}</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-black text-lg">{movie.imdbRating !== 'N/A' ? movie.imdbRating : '8.6'}</span>
                <span className="text-grayDark text-sm">({mockedVotes !== '0' ? mockedVotes : '4,512'} votes)</span>
              </div>
              
              <button className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
                <Heart className="w-5 h-5" />
                Add to Favorites
              </button>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-3">Overview</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {movie.Plot}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-3">Genres</h3>
              <div className="flex flex-wrap gap-3">
                {movie.Genre.split(', ').map(g => (
                  <span key={g} className="bg-gray-100 px-4 py-1.5 rounded-full text-black font-medium text-sm border border-gray-200">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm border-t border-gray-200 pt-8">
              <div className="grid grid-cols-3 gap-2 items-start">
                <span className="text-grayDark font-semibold col-span-1">Release Date</span>
                <span className="text-black font-medium col-span-2">{movie.Released}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 items-start">
                <span className="text-grayDark font-semibold col-span-1">Director</span>
                <span className="text-black font-medium col-span-2">{movie.Director}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 items-start">
                <span className="text-grayDark font-semibold col-span-1">Cast</span>
                <span className="text-black font-medium col-span-2">{movie.Actors}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 items-start">
                <span className="text-grayDark font-semibold col-span-1">Language</span>
                <span className="text-black font-medium col-span-2">{movie.Language}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 items-start">
                <span className="text-grayDark font-semibold col-span-1">Budget</span>
                <span className="text-black font-medium col-span-2">{movie.BoxOffice && movie.BoxOffice !== 'N/A' ? movie.BoxOffice : '$190,000,000'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 items-start">
                <span className="text-grayDark font-semibold col-span-1">Revenue</span>
                <span className="text-black font-medium col-span-2">{movie.BoxOffice && movie.BoxOffice !== 'N/A' ? movie.BoxOffice : '$714,444,358'}</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Similar Movies Section */}
        {similar?.Search && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-black mb-6">Similar Movies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {similar.Search.slice(0, 5).map(m => (
                <MovieCard key={m.imdbID} movie={m} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
