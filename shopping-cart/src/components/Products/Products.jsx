import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';

// Importando os estilos.
import './Products.css'; 

// Importando a função da api da pasta api 
import fetchProducts from '../../api/fetchProducts';

import ProductCard from '../ProductCard/ProductCard';


function Products() { 

  // Estado para salvar um array com os produtos
  const [products, setProducts] = useState([]); 

  // Estado para controlar quando o loading vai aparecer e sumir, ele começa carregando.
  const [loading, setLoading] = useState(true); 
  

  useEffect(() => {

    // no fetchProduct tem um parametro "query" responsavel pela pesquisada.
    fetchProducts('mesa').then((response) => {

      // valor usado para atualizar o products.
      setProducts(response);

      // Quando tiver buscado os valores, o loading vai sumir. 
      setLoading(false);
    });

  }, []); 




  return ( 

    (loading && <Loading /> ) || ( 
      <section className="products container">
        {/* Mapeando cada produto do products, e renderizando um ProductCard para cada um deles  */}
        {products.map((product) => <ProductCard key={product.id} data={ product } />)}
      </section>
    )


  ); 
}

export default Products;

