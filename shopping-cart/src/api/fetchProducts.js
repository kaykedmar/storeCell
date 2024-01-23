// Trecho de codigo responsavel por listar os produtos pesquisado. 
const fetchProducts = async (query) => { 

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`); 

  // Extraindo os dados em JSON.
  const data = await response.json();

  // Retornando apenas o results. 
  return data.results;

}; 

export default fetchProducts;
