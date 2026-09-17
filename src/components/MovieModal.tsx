import React, { useEffect, useState } from 'react';
import { X, Star, Calendar, Film } from 'lucide-react';
import { Show } from '../types';
import { cleanSummary, formatRating, getReleaseYear } from '../services/movieApi';

interface MovieModalProps {
  movie: Show | null;
  isOpen: boolean;
  onClose: () => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  const [imageError, setImageError] = useState(false);

  // Close modal when pressing the escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !movie) return null;

  const ratingStr = formatRating(movie.rating);
  const releaseYear = getReleaseYear(movie.premiered);
  const overviewText = cleanSummary(movie.summary);
  const backdropImage = movie.image?.original || movie.image?.medium;

  return (
    <div
      id="movie-details-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        id="movie-details-modal-container"
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="modal-top-close-btn"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-950 shadow-md border border-slate-200 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1">
          <div className="relative w-full h-56 sm:h-72 bg-slate-100 flex items-center justify-center border-b border-slate-200">
            {backdropImage && !imageError ? (
              <img
                src={backdropImage}
                alt={movie.name}
                onError={() => setImageError(true)}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400">
                <Film className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">{movie.name}</span>
              </div>
            )}
          </div>

          <div className="p-6 space-y-4 bg-white">
            <h2 id="modal-movie-title" className="text-2xl font-bold text-slate-900">
              {movie.name}
            </h2>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
              <div className="flex items-center gap-1 text-amber-600 font-bold">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>Rating: {ratingStr}</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-1 text-slate-600">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>Release: {releaseYear}</span>
              </div>
              {movie.genres && movie.genres.length > 0 && (
                <>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-500 font-medium">{movie.genres.join(', ')}</span>
                </>
              )}
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-bold text-slate-900 mb-2">Overview:</h3>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-100">
                {overviewText}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            id="modal-bottom-close-btn"
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-lg bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 border border-slate-300 transition-colors cursor-pointer shadow-xs"
          >
            <X className="w-4 h-4 text-rose-500" />
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
