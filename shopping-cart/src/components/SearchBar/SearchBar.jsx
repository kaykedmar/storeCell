import React, { useState } from 'react';

// Importando Icons
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';

function SearchBar() {

  // Estado para armazenar o valor digitado no campo de busca
  const [ searchValue, setSearchValue ] = useState(''); 

  const handleSearch = async (event) => { 
    // Previvendo do form atualizar a pagina.
    event.preventDefault();


    // fetchProducts função para busca.
    const products = await fetchProducts(searchValue); 

    // Atualizado o searchValue para uma string vazia.
    setSearchValue('');


    console.log(products);

  }; 


  return (
    // Formulário de busca
    <form className="search-bar" onSubmit={handleSearch}>

      {/* Campo de busca com evento onChange para rastrear alterações */}
      <input
        type="search"

        // Atribui o valor do estado 'searchValue' ao input
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"

        // Atualiza 'searchValue' conforme o usuário digita.
        onChange={({target}) => setSearchValue(target.value)}
        required
      />
     
      <button type="submit" className="search__button">
        <FaSearch  />
      </button>
    </form>
  );
}

export default SearchBar;
