import React, { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [queryName, setQueryName] = useState('');

  const handleNameChange = event => {
    setQueryName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (queryName.trim() === '') {
      toast.error('Type something to find');
      return;
    }
    onSubmit(queryName);
    setQueryName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          value={queryName}
          onChange={handleNameChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
