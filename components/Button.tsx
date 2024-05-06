'use client';

import { deleteUserAction } from '@/actions';

export default function Button({ id }: { id: number }) {
  return <button onClick={() => deleteUserAction(id)}>x</button>;
}
