"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Welcome {session.user?.email}</p>
        <button onClick={() => signOut()}>LogOut</button>
      </>
    );
  }

  return (
    <>
      <div>
        <button onClick={() => signIn("google")}>Continue with Google</button>
      </div>
    </>
  );
}
