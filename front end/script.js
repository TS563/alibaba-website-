
function filterProducts(category) {
   let filteredProducts = products;

   if (category !== 'all') {
       filteredProducts = products.filter(product => product.category === category);
   }

   displayProducts(filteredProducts);
   currentPage = 1; 
   displayPagination();
}



function sortProducts(sortBy) {
   let sortedProducts = products.slice(); 

   if (sortBy === 'price') {
       sortedProducts.sort((a, b) => a.price - b.price);
   } else if (sortBy === 'title') {
       sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
   }
   

   displayProducts(sortedProducts);
   currentPage = 1; 
   displayPagination();
}
