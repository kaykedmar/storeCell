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

    // no fetchProduct tem um parametro "query" responsavel pela pesquisada.
    fetchProducts('mesa').then((response) => {

      // valor usado para atualizar o products.
      setProducts(response);

    });

  }, []); 

  return ( 
    <section className="products container">
      {
        // Mapeando cada produto do products, e renderizando um ProductCard para cada um deles 
        products.map((product) => <ProductCard key={product.id} data={ product } />)
      }
    </section>
  ); 
}

export default Products;

