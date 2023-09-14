import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../api';
 

export default function Reviews () {
  const [moviesReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => {
      setMoviesReviews(results);
    });
  }, [movieId]);

  return (
    <>
      {moviesReviews.length > 0 ? (
        moviesReviews.map(({ id, author, content }) => {
          return (
            <ul key={id}>
              <li>
                <b> Author: {author}</b>
              </li>
              <li>{content}</li>
            </ul>
          );
        })
      ) : (
        <p>Sorry, we don`t have any review for this movie 🤷🏼‍♂️</p>
      )}
    </>
  );
};
 
