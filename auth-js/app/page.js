import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "./components/LogoutButton";
export default async function Component() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  if (!session) return <p>loading...</p>;
  return (
    <>
    <title>{session.user.name}</title>
      <p>Welcome {session.user.name}</p>
      <LogoutButton />
    </>
  );
}
