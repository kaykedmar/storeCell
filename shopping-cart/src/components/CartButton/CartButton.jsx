import React from 'react';
import './CartButton.css'; 


import { FaShoppingCart } from 'react-icons/fa';


function CartButton() { 
  return ( 
    <button type="button" className="cart__button">

      <FaShoppingCart />
      
      {/* Criando a notifcação da quantidade de itens adicionado */}
      <span className="cart-status">1</span>
    </button>
  ); 
}

export default CartButton;
