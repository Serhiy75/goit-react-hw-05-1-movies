import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'service/Api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    getSearchMovie(query).then(setMovies);
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <SearchMovie onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};
