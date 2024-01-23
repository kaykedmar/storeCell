import React from 'react';
import SearchBar from '../SearchBar/SearchBar';  

// Estilos 
import Header from './Header.css';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
