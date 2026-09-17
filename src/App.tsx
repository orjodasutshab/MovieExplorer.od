import React, { useState, useEffect, useCallback } from 'react';
import { Show } from './types';
import { getAllShows, searchShows } from './services/movieApi';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { MovieListing } from './components/MovieListing';
import { MovieModal } from './components/MovieModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'movies'>('home');
  const [allShows, setAllShows] = useState<Show[]>([]);
  const [searchResults, setSearchResults] = useState<Show[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedMovie, setSelectedMovie] = useState<Show | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load initial movies from TVMaze API
  const fetchAllShowsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getAllShows();
      setAllShows(data);
      setSearchResults(data);
    } catch (err: any) {
      setError(err?.message || 'Failed to fetch movies. Please check your internet connection.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllShowsData();
  }, [fetchAllShowsData]);

  // Handle user search input with a debounce timer
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(allShows);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await searchShows(searchQuery);
        setSearchResults(results);
      } catch (err: any) {
        setError(err?.message || 'Error searching for movies.');
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, allShows]);

  const handleOpenDetails = (movie: Show) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleNavigate = (page: 'home' | 'movies') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="movie-explorer-app" className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 bg-white">
        {currentPage === 'home' ? (
          <HeroBanner onExploreClick={() => handleNavigate('movies')} />
        ) : (
          <MovieListing
            movies={searchResults}
            isLoading={isLoading}
            error={error}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onRetry={fetchAllShowsData}
            onSelectMovie={handleOpenDetails}
          />
        )}
      </main>

      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}
