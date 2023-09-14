import React from 'react';
import PropTypes from 'prop-types';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { AiOutlineFileImage } from 'react-icons/ai';
import style from "./MovieList.module.css"

export default function MovieList ({ movies }) {
  const location = useLocation();
  return (
    <>
      <ul className={style.movieList}>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li className={style.movieListItem} key={id}>
              <Link className={style.link} to={`/movies/${id}`} state={{ from: location }}>
                <div className={style.movieCard}>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={title}
                      className={style.movieCardImg}
                    />
                  ) : (
                    <AiOutlineFileImage size={200} />
                  )}
                  {title}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

 
