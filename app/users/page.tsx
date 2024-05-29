export default async function UsersPage() {
  return (
    <div className="px-5">
      <form className="flex flex-col gap-4 w-[300px] text-black">
        <input type="text" name="name" />
        <input type="text" name="email" />
        <button type="submit" className="bg-red-300 text-white">
          Create User
        </button>
      </form>
    </div>
  );
}
