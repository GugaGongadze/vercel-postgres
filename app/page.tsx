import ProductsList from '@/components/ProductsList';
import { Product } from '@/types';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products');
  const products = await res.json();

  return products.products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <ProductsList products={products} />
    </main>
  );
}
