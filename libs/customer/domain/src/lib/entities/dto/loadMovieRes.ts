import { Movie } from '../movie';

export interface LoadMovieRes {
  Response: 'True' | 'False';
  Search: Movie[];
  totalResults: string;
}
