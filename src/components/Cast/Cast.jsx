import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../api';
import { AiOutlineFileImage } from 'react-icons/ai';
 

export default function Cast () {
  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(({ cast }) => {
      setMoviesCast(cast);
    });
  }, [movieId]);

  return (
    <div>
      {moviesCast.length > 0 ? (
        moviesCast.map(({ id, profile_path, character, name }) => (
          <div key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              />
            ) : (
              <AiOutlineFileImage size={200} />
            )}

            <p>{name}</p>

            <p>Character : {character.substr(0, 9)}</p>
          </div>
        ))
      ) : (
        <p> Sorry, there isn't any info</p>
      )}
    </div>
  );
};
 