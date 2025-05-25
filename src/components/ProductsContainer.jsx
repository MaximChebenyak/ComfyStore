import React from 'react';
import ProductsGrid from './ProductsGrid';
import ProductList from './ProductsList';

const ProductsContainer = () => {
  return (
    <>
      <ProductList />
      <ProductsGrid />
    </>
  );
};

export default ProductsContainer;
