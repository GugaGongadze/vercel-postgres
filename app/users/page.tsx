import { createUserAction } from '@/actions';
import { User, getUsers } from '@/api';
import Button from '@/components/Button';

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="px-5">
      <form action={createUserAction} className="flex flex-col gap-4 w-[300px] text-black">
        <input type="text" name="name" />
        <input type="text" name="email" />
        <button type="submit" className="bg-red-300 text-white">
          Create User
        </button>
      </form>

      {users.map((user: User) => (
        <div className="flex justify-between border-b" key={user.id}>
          <div className="flex gap-4 border-b">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>

          <Button id={user.id} />
        </div>
      ))}
    </div>
  );
}
