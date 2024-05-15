'use client';

import { Product } from '@/types';
import Image from 'next/image';

export default function ProductCard({
  product,
  handleClick,
}: {
  product: Product;
  handleClick: (product: Product) => void;
}) {
  return (
    <div
      key={product.id}
      className="border border-gray-500 rounded-lg relative min-h-80 text-white flex flex-col items-center gap-8 justify-center"
    >
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.rating}</p>
      <p>{product.category}</p>
      <button className="border border-gray-500 p-4 rounded-xl" onClick={() => handleClick(product)}>
        + Add to Cart
      </button>
      <Image src={product.thumbnail} alt={product.title} fill className="-z-10 blur-md" />
    </div>
  );
}
