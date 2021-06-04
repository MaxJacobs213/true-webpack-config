function fetchProducts() {
  const products = [
    {
      id: 1,
      params: {
        name: 'Product 1',
        color: 'Red',
        size: '2x4',
        price: '2$',
      },
    },
    {
      id: 2,
      params: {
        name: 'Product 2',
        color: 'Green',
        size: '6x8',
        price: '12$',
      },
    },
    {
      id: 3,
      params: {
        name: 'Product 3',
        color: 'Red',
        size: '2x4',
        price: '5$',
      },
    },
    {
      id: 4,
      params: {
        name: 'Product 4',
        color: 'Grey',
        size: '4x6',
        price: '22$',
      },
    },
    {
      id: 5,
      params: {
        name: 'Product 5',
        color: 'White',
        size: '4x4',
        price: '43$',
      },
    },
  ];

  return products;
}

function getTableHeaders() {
  const headers = {
    name: 'Product name',
    color: 'Color',
    size: 'Size(cm)',
    price: '$',
  };

  return headers;
}

export {
  fetchProducts,
  getTableHeaders,
};
