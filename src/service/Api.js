import axios from 'axios';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data.results;
};

export const getSearchMovie = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: query,
    },
  });
  return data.results;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
