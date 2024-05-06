'use server';

import { createUser, deleteUser } from './api';

export async function createUserAction(formData: FormData) {
  const { name, email } = Object.fromEntries(formData);

  return createUser(name as string, email as string);
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}
