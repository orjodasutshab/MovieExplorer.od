import React, { useRef } from 'react';
import { Search, X, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { Show } from '../types';
import { MovieCard } from './MovieCard';

interface MovieListingProps {
  movies: Show[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onRetry: () => void;
  onSelectMovie: (movie: Show) => void;
}

export const MovieListing: React.FC<MovieListingProps> = ({
  movies,
  isLoading,
  error,
  searchQuery,
  onSearchChange,
  onRetry,
  onSelectMovie,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <section id="movie-listing-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white">
      {/* Search Input Box */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            ref={searchInputRef}
            id="movie-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for a movie..."
            className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-300 focus:border-amber-500 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 text-base shadow-xs transition-all"
          />
          {searchQuery && (
            <button
              id="clear-search-query-btn"
              onClick={() => {
                onSearchChange('');
                searchInputRef.current?.focus();
              }}
              className="absolute right-3.5 p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Network or Fetch Error */}
      {error && (
        <div
          id="error-state-box"
          className="my-10 p-6 rounded-xl bg-rose-50 border border-rose-200 text-center max-w-md mx-auto"
        >
          <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
          <h3 className="text-base font-bold text-rose-900 mb-1">Failed to load data</h3>
          <p className="text-xs text-rose-700 mb-4">{error}</p>
          <button
            id="retry-fetch-btn"
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold cursor-pointer shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 text-slate-500">
          <Loader2 className="w-8 h-8 animate-spin text-amber-500 mb-3" />
          <p className="text-sm font-medium">Loading movies...</p>
        </div>
      )}

      {/* Empty Search Result */}
      {!isLoading && !error && movies.length === 0 && (
        <div
          id="empty-search-state"
          className="my-16 text-center max-w-md mx-auto p-8 rounded-xl bg-slate-50 border border-slate-200"
        >
          <p className="text-base text-slate-700 mb-4">
            No movies found for "{searchQuery}".
          </p>
          <button
            id="reset-search-btn"
            onClick={() => onSearchChange('')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer shadow-xs"
          >
            Show All Movies
          </button>
        </div>
      )}

      {/* Movies Grid */}
      {!isLoading && !error && movies.length > 0 && (
        <div
          id="movie-grid-container"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onSeeDetails={onSelectMovie}
            />
          ))}
        </div>
      )}
    </section>
  );
};
