import React from 'react';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';

import { FaCartPlus } from 'react-icons/fa6';

// Estilazação.
import './ProductCard.css'; 

function ProductCard({ data }) {

  const {title, thumbnail, price } = data; 

  return ( 
    <section className="product-card">
      
      <img 
      // qualquer palavra antes de .jpg vai mudar pra W.jpg.
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt="product" className="card__image"/>

      <div className="card__infos">
        
        {/* Mudando o formado do preço para Reais */}
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>

        <h2 className="card__title">{title}</h2>
      </div>

      {/* Botao para adicionar no carrinho */}
      <button type="button" className="button__add-cart">
        <FaCartPlus />
      </button>

    </section>
  );
} 

export default ProductCard;


ProductCard.propTypes = { 
  data: propTypes.shape({})
}.isRequired;

