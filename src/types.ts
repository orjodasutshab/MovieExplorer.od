export interface ShowImage {
  medium: string;
  original: string;
}

export interface ShowRating {
  average: number | null;
}

export interface ShowNetwork {
  id: number;
  name: string;
  country?: {
    name: string;
    code: string;
    timezone: string;
  };
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime?: number | null;
  premiered: string | null;
  ended?: string | null;
  officialSite: string | null;
  rating: ShowRating;
  weight: number;
  network: ShowNetwork | null;
  webChannel: ShowNetwork | null;
  image: ShowImage | null;
  summary: string | null;
  updated?: number;
}

export interface SearchResultItem {
  score: number;
  show: Show;
}
