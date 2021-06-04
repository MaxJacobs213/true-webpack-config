import './scss/main.scss';
import createProductsTable from './js/table';
import { fetchProducts } from './js/products';

document.addEventListener('DOMContentLoaded', () => {
  const products = fetchProducts();

  createProductsTable(products);
});
