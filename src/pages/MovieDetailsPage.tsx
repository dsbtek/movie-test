import { useParams, useNavigate } from 'react-router-dom';
import { useMovieDetails } from '../hooks/useMovies';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { ArrowLeft, Star, Calendar, Clock, Award } from 'lucide-react';

export const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: movie, isLoading, error } = useMovieDetails(id!);

  if (isLoading) return <LoadingState />;
  if (error || !movie) return <ErrorState message="Failed to load movie details." />;

  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop';

  return (
    <div className="w-full relative pb-24">
      {/* Dynamic Backdrop */}
      <div className="absolute inset-0 h-[60vh] w-full z-0 overflow-hidden">
        <img 
          src={poster} 
          alt={movie.Title} 
          className="w-full h-full object-cover opacity-20 blur-xl scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="relative z-10 px-4 md:px-8 py-8 w-full max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 bg-surface/50 px-4 py-2 rounded-full backdrop-blur-md w-fit border border-white/5"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Poster */}
          <div className="w-full md:w-1/3 max-w-[350px] mx-auto md:mx-0 flex-shrink-0">
            <img 
              src={poster} 
              alt={movie.Title} 
              className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col pt-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              {movie.Title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/20">
                <Star className="w-4 h-4 fill-current" />
                <span>{movie.imdbRating} / 10</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{movie.Year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{movie.Runtime}</span>
              </div>
              <div className="px-2 py-0.5 rounded border border-gray-500 text-gray-400">
                {movie.Rated}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {movie.Plot}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-gray-500 block mb-1">Director</span>
                <span className="text-white font-medium">{movie.Director}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Writers</span>
                <span className="text-white font-medium">{movie.Writer}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Cast</span>
                <span className="text-white font-medium">{movie.Actors}</span>
              </div>
              <div>
                <span className="text-gray-500 block mb-1">Genres</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {movie.Genre.split(', ').map(g => (
                    <span key={g} className="bg-surface px-3 py-1 rounded-full text-gray-300 border border-white/5">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {movie.Awards && movie.Awards !== 'N/A' && (
              <div className="mt-8 p-4 bg-surface/50 rounded-xl border border-white/5 flex items-start gap-4">
                <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <p className="text-gray-300 font-medium">{movie.Awards}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
