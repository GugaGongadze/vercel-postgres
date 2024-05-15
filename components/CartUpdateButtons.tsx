'use client';

export default function CartUpdateButtons({ id }: { id: string }) {
  const handleQuantityChange = async (id: string, change: number) => {
    const response = await fetch('/api/update-cart', {
      method: 'PUT',
      body: JSON.stringify({ userId: 2, productId: id, quantity: change }),
    });
  };

  return (
    <>
      <button className="text-3xl" onClick={() => handleQuantityChange(id, 1)}>
        +
      </button>
      <button className="text-3xl" onClick={() => handleQuantityChange(id, -1)}>
        -
      </button>
    </>
  );
}
