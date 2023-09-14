import { useState, useEffect } from 'react';
import { fetchTrending } from '../components/api';
import MovieList from '../components/MovieList/MovieList';
import Title from '../components/Title/Title';
import  Loader  from '../components/Loader/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetchTrending()
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      <Title title="Trending today" />
      <MovieList movies={movies} />
      {loader && <Loader />}
    </>
  );
};


