import { getTableHeaders } from './products';

/**
 * Функция, которая создает HTML элемент table со строками, сфорированными из массива products.
 * @param products Массив продуктов
 */
export default function createProductsTable(products) {
  // todo creating and insert table
  const headers = getTableHeaders();

  console.log(products, headers);
}
