import React from 'react';

// Importando Icons
import { FaSearch } from 'react-icons/fa';


function SearchBar() {
  return (
    <form>
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search__input"
        required
      />

      <button type="submit" className="search__button">
        <FaSearch  />
      </button>
    </form>
  );
}

export default SearchBar;
