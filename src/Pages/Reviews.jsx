import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      {reviews.length === 0 ? (
        <p>No Reviews</p>
      ) : (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
