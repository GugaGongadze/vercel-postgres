'use client';

import { Product } from '@/types';
import Cart from './Cart';
import ProductCard from './ProductCard';
import { useReducer } from 'react';

interface SelectedProduct {
  id: number;
  count: number;
}

const initialState: SelectedProduct[] = [];

type Action =
  | { type: 'INCREMENT'; payload: number }
  | { type: 'DECREMENT'; payload: number }
  | { type: 'RESET' };

function reducer(state: SelectedProduct[], action: Action) {
  switch (action.type) {
    case 'INCREMENT': {
      const selectedProductIdx = state.findIndex((p) => p.id === action.payload);

      if (selectedProductIdx === -1) return [...state, { id: action.payload, count: 1 }];

      const clone = [...state];

      const selectedProduct = clone[selectedProductIdx];

      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count + 1,
      };

      clone[selectedProductIdx] = updatedSelectedProduct;

      return clone;
    }
    case 'DECREMENT': {
      const selectedProductIdx = state.findIndex((p) => p.id === action.payload);

      if (selectedProductIdx === -1) return [...state, { id: action.payload, count: 1 }];

      const clone = [...state];

      const selectedProduct = clone[selectedProductIdx];

      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count - 1,
      };

      clone[selectedProductIdx] = updatedSelectedProduct;

      return clone;
    }
    case 'RESET':
      return initialState;
  }
}

export default function ProductsList({ products }: { products: Product[] }) {
  const [selectedProducts, dispatch] = useReducer(reducer, initialState);

  const handleClick = (product: Product) => {
    dispatch({ type: 'INCREMENT', payload: product.id });
  };

  const selectedNumber = selectedProducts.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  return (
    <>
      <Cart
        className="w-8 h-8 absolute right-5 top-5 cursor-pointer"
        selectedNumber={selectedNumber}
      />
      <section className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
}
