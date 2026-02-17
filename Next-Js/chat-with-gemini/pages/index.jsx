import React, { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  async function sendMessage() {
    if (!message) return;

    const userMessage = { role: "user", text: message };
    setChat([...chat, userMessage]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();

    const botMessage = { role: "bot", text: data.reply };
    setChat((prev) => [...prev, botMessage]);

    setMessage("");
  }
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-50 font-sans">
        <header className="bg-white border-b p-4 sticky top-0 z-10 shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold text-blue-600 text-center">
            CD Chat App <span className="text-gray-400">|</span> Gemini
          </h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 max-w-4xl w-full mx-auto">
          {chat.length === 0 && (
            <p className="text-center text-gray-400 mt-20">
              Start a conversation!
            </p>
          )}

          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {" "}
              {!msg.role && <p>Loading... </p>}
              <div
                className={`max-w-[85%] md:max-w-[70%] p-3 rounded-2xl shadow-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-tr-none"
                    : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
                }`}
              >
                <p className="text-xs font-bold mb-1 uppercase opacity-70">
                  {msg.role === "user" ? "You" : "Gemini"}
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </main>

        <footer className="bg-white border-t p-4 md:p-6 sticky bottom-0">
          <div className="max-w-4xl mx-auto flex gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition-all"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} // Send on Enter key
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 md:py-3 rounded-full font-medium transition-colors duration-200 active:scale-95"
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
