import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../components/api';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Title from '../components/Title/Title';
import Loader from 'components/Loader/Loader';

export default function Movies () {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const moviesName = searchParams.get('query') ?? '';

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;

    setLoading(true);
    fetchSearchMovies(moviesName)
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [moviesName]);

  return (
    <>
       <Title title="Search for your movie" />
      {error && <h2>{error.message}</h2>}
      <SearchForm value={moviesName} onSearch={handleOnSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
    </>
  );
};

 
