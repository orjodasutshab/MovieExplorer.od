import React, { useState } from 'react';
import { Star, Calendar, Film } from 'lucide-react';
import { Show } from '../types';
import { formatRating, getReleaseYear } from '../services/movieApi';

interface MovieCardProps {
  movie: Show;
  onSeeDetails: (movie: Show) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onSeeDetails }) => {
  const [imageError, setImageError] = useState(false);
  const posterUrl = movie.image?.medium || movie.image?.original;
  const ratingText = formatRating(movie.rating);
  const releaseYear = getReleaseYear(movie.premiered);

  return (
    <div
      id={`movie-card-${movie.id}`}
      className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all"
    >
      <div className="relative aspect-[2/3] w-full bg-slate-100 overflow-hidden flex items-center justify-center">
        {posterUrl && !imageError ? (
          <img
            src={posterUrl}
            alt={movie.name}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-400 bg-slate-100">
            <Film className="w-12 h-12 mb-2 text-slate-400 stroke-[1.5]" />
            <span className="text-xs text-slate-600 text-center font-medium line-clamp-2">
              {movie.name}
            </span>
            <span className="text-[10px] text-slate-400 mt-1">No Poster Available</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3 bg-white border-t border-slate-100">
        <div>
          <h3
            id={`movie-title-${movie.id}`}
            title={movie.name}
            className="font-bold text-base text-slate-900 line-clamp-1"
          >
            {movie.name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1 text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-semibold">{ratingText !== 'N/A' ? ratingText : 'N/A'}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1 text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{releaseYear}</span>
            </div>
          </div>
        </div>

        <button
          id={`movie-see-details-btn-${movie.id}`}
          onClick={() => onSeeDetails(movie)}
          className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors cursor-pointer shadow-xs"
        >
          See Details
        </button>
      </div>
    </div>
  );
};
