import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


export default function SearchForm ({ onSearch }) {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) return console.error('Please enter a sometings');
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={changeQuery}
        />
        <button type="submit">
          <AiOutlineSearch size="15" />
        </button>
      </form>
      
    </>
  );
};


