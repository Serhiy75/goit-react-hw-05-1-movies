import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/Api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);
  return <MoviesList movies={movies} />;
};
