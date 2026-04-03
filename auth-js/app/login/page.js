"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(data);

    if (data?.error) {
      alert("Invalid email or password");
    } else {
      alert("Welcome");
      setEmail("");
      setPassword("");
      router.push("/");
    }
  };
  return (
    <>
      <div>Login</div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input type="submit" value="login" />
        <p>
          Dont`t have an account<Link href={"/signup"}>Signup</Link>
        </p>
      </form>

      <button onClick={() => signIn("github")}>Sign in as github</button>
    </>
  );
}
