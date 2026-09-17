import { Show, SearchResultItem } from '../types';

const BASE_URL = 'https://api.tvmaze.com';

// Fetch the list of shows for the catalog
export async function getAllShows(): Promise<Show[]> {
  const response = await fetch(`${BASE_URL}/shows`);
  if (!response.ok) {
    throw new Error(`Failed to fetch shows (Status: ${response.status})`);
  }
  return await response.json();
}

// Search shows by title query
export async function searchShows(query: string): Promise<Show[]> {
  const trimmed = query.trim();
  if (!trimmed) {
    return getAllShows();
  }
  const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(trimmed)}`);
  if (!response.ok) {
    throw new Error(`Failed to search shows (Status: ${response.status})`);
  }
  const data: SearchResultItem[] = await response.json();
  return data.map((item) => item.show);
}

// Strip HTML tags from summary description
export function cleanSummary(html: string | null): string {
  if (!html) return 'No description available for this title.';
  const text = html.replace(/<[^>]*>/g, '').trim();
  return text || 'No description available for this title.';
}

// Parse release year from date string (YYYY-MM-DD)
export function getReleaseYear(dateString: string | null): string {
  if (!dateString) return 'N/A';
  const parts = dateString.split('-');
  return parts[0] || 'N/A';
}

// Format rating number to one decimal place
export function formatRating(rating?: { average: number | null }): string {
  if (rating && typeof rating.average === 'number') {
    return rating.average.toFixed(1);
  }
  return 'N/A';
}
