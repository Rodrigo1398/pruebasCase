import { getUsers } from "@/actions";
import { TableUser } from "./ui/TableUser";

export default async function UserPage() {
  const users = await getUsers();
  return (
    <div className="w-[83%] h-screen justify-center p-10">
      <h1>Usuarios</h1>
      <TableUser users={users}/>
    </div>
  );
}
