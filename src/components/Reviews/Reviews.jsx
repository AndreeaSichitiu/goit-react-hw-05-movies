import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../api';
import style from "./Reviews.module.css"
 

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
            <ul className={style.reviewContainer} key={id}>
              <li>
                <b className={style.review}> Author: {author}</b>
              </li>
              <li className={style.reviewContent}>{content}</li>
            </ul>
          );
        })
      ) : (
        <p className={style.review} >Sorry, there is no review for this movie</p>
      )}
    </>
  );
};
 
