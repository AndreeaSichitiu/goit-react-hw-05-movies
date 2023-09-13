import React, { useState, useEffect } from 'react';
 
import { useParams } from 'react-router-dom';
import { getReviews } from '../api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(response =>
      setReviews(response.data.results)
    );
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>
                <strong>Author:</strong> {review.author}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews for this movie.</p>
      )}
    </div>
  );
}