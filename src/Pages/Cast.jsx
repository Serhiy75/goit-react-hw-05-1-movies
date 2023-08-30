import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/Api';

const defaultImg =
  'https://www.repricerexpress.com/wp-content/uploads/2019/07/shutterstock_13308901581.jpg';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);
  return (
    <>
      {cast.length === 0 ? (
        <p>No Casts</p>
      ) : (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {cast.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : defaultImg
                }
                alt={item.original_name}
                width="150px"
              />
              <p>{item.original_name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
