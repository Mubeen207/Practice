// "use client";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import LogoutButton from "./components/LogoutButton";
// import { useEffect } from "react";

export default function Component() {
  const { data: session } = getServerSession();
  // useEffect(() => {
  if (!session) {
    redirect("/login");
  }
  // }, [session]);

  if (!session) return <p>loading...</p>;
  return (
    <>
      <p>Welcome to deshboard</p>
      <LogoutButton />
    </>
  );
}
