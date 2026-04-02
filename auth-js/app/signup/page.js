"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { message } = await res.json();
    console.log(message);

    alert(message);
  };
  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
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
        <input type="submit" value="Signup" />
        <p>
          Have an account?<Link href={"/login"}>Login</Link>
        </p>
      </form>
    </>
  );
}
