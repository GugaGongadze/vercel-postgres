import { getUserCart } from '@/api';
import CartUpdateButtons from '@/components/CartUpdateButtons';

const userId = 2;

export default async function CheckoutPage() {
  const cart = await getUserCart(userId);

  const products = Object.entries<string>(cart.products);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 relative gap-8">
      {products.map(([id, count]) => (
        <div key={id} className="border border-gray-500 rounded-lg p-8 flex flex-col">
          <div>
            ID: {id} <span>Count: {count}</span>
          </div>
          <CartUpdateButtons id={id} />
        </div>
      ))}
    </div>
  );
}
