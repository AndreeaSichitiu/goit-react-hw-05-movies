import { useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { fetchDetailsMovie } from '../../components/api';
import BackButton from 'components/BackButton/BackButton';


const MoviesDetails = () => {
  const [moviesDetails, setMoviesDetails] = useState({});

  const { movieId } = useParams();
  const location = useLocation();
  const buttonBack = location.state?.from ?? `/`;

  useEffect(() => {
    fetchDetailsMovie(movieId).then(setMoviesDetails);
  }, [movieId]);

  const { poster_path, title, genres, overview, vote_average, release_date } =
    moviesDetails;

  return (
    <>
      <BackButton to={buttonBack} />
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          {title && (
            <h2>
              {title} {release_date.substr(0, 4)}
            </h2>
          )}

          <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
        </div>
      </div>

      <ul>
        <h3>Additional information</h3>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
      
    </>
  );
};

export default MoviesDetails;