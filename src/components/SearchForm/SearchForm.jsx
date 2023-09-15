import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import style from './SearchForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const changeQuery = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!query) return Notify.warning('Please enter search movie!');
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
}
