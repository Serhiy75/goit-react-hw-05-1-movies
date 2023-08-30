import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { Cast } from 'Pages/Cast';
import { Reviews } from 'Pages/Reviews';
import { MovieDetails } from 'Pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
