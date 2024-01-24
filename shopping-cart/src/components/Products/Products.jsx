import React, { useState, useEffect } from 'react';

// Importando os estilos.
import './Products.css'; 

// Importando a função da api da pasta api 
import fetchProducts from '../../api/fetchProducts';

import ProductCard from '../ProductCard/ProductCard';



function Products() { 

  // Estado para salvar um array com os produtos
  const [products, setProducts] = useState([]); 

  useEffect(() => {

    fetchProducts('pc').then((response) => {

      // Salvando os dados no array.
      setProducts(response);

    });

  }, []); 

  return ( 
    <section className="products container">
      {
        products.map((product) => <ProductCard key={product.id} data={ product } />)
      }
    </section>
  ); 
}

export default Products;

