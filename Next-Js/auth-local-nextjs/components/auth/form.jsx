import React, { useState } from "react";

export default function Form() {
  const [signIn, setSignIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    
    if (signIn) {
    } else {
      if (name === "" && email === "" && password === "") return;
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      const data = await response.json();
      if (data.status) {
        setName("");
        setEmail("");
        setPassword("");
        alert("Regestered");
      } else {
        alert(data.message);
        return;
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white border rounded-lg shadow-sm transition-all duration-500">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>

        <form onSubmit={handleAuth} className="flex flex-col">
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              signIn ? "max-h-0 opacity-0 mb-0" : "max-h-32 opacity-100 mb-4"
            }`}
          >
            <p className="text-sm font-medium text-gray-700 mb-1">
              Enter your Name
            </p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full border p-2 rounded-md outline-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Enter your Email
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="w-full border p-2 rounded-md outline-blue-500"
              placeholder="email@cd.com"
            />
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Enter your Password
            </p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="w-full border p-2 rounded-md outline-blue-500"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            onClick={() => setSignIn(!signIn)}
            className="text-sm font-medium text-blue-700 mt-4 hover:underline cursor-pointer text-center"
          >
            {signIn
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </p>
        </form>
      </div>
    </div>
  );
}
