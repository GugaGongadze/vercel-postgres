export interface User {
  id: number;
  name: string;
  email: string;
}

export const BASE_URL = 'http://localhost:3001';

export async function getUsers() {
  const response = await fetch(BASE_URL + '/api/get-users');
  const { users } = await response.json();

  return users.rows;
}

export async function createUser(name: string, email: string) {
  return await fetch(BASE_URL + '/api/create-user', {
    method: 'POST',
    body: JSON.stringify({ name, email }),
  });
}

export async function deleteUser(id: number) {
  return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: 'DELETE',
  });
}

export async function getUserCart(userId: number) {
  const response = await fetch(BASE_URL + `/api/get-cart/${userId}`, {
    cache: 'no-store',
  });
  const carts = await response.json();

  const [cart] = carts.carts.rows;
  console.log('CART:', cart);

  return cart;
}

export async function updateCart(userId: number, productId: string, quantity: number) {
  return await fetch(BASE_URL + '/api/update-cart', {
    method: 'PUT',
    body: JSON.stringify({ userId, productId, quantity }),
  });
}
