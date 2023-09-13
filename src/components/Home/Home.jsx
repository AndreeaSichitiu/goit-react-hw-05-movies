import React, { useEffect, useState } from 'react';
import '../Home/Home.module.css';
import Header from 'components/Header/Header';
import { getMovies } from '../api';
import { Link } from 'react-router-dom';

export default function HomeContent() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error ', error);
      });
  }, []);

  return (
    <div className="main">
      <Header />
      <h2 className="mainTitle">Trending today</h2>
      <ul className='mainList'>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}