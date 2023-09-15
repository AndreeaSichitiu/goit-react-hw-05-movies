import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import style from "./SearchForm.module.css"


export default function SearchForm ({ onSearch }) {
  const [query, setQuery] = useState('');

  const changeQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) return console.error('Please enter someting');
    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter for search movies"
          name="query"
          value={query}
          onChange={changeQuery}
          className={style.searchInput}
        />
        <button className={style.formButton} type="submit">
          <AiOutlineSearch size="20" />
        </button>
      </form>
      
    </>
  );
};


