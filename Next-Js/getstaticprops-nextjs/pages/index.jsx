import React, { useEffect, useState } from "react";
export default function Home(props) {
  let [login, setLogin] = useState(null);
  const { name, todos } = props;
  useEffect(() => {
    setLogin(todos);
  }, [todos]);

  if (!login) return <p>Loading...</p>;
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-md mx-auto mb-6">
          <h1 className="text-2xl font-extrabold text-indigo-600">
            Hi, <span className="text-gray-800">{name}</span>
          </h1>
          <p className="text-sm text-gray-500">This is All Tasks</p>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-indigo-600 p-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              My Tasks
            </h2>
          </div>

          <ul className="p-4 space-y-4 max-h-125 overflow-y-auto scrollbar-thin">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`group flex flex-col p-4 border rounded-xl transition-all duration-200 ${
                  todo.completed
                    ? "bg-gray-50 border-gray-200 opacity-75"
                    : "bg-white border-indigo-100 hover:border-indigo-300 shadow-sm"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span
                    className={`text-lg font-semibold ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.title}
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold ${
                      todo.completed
                        ? "bg-green-100 text-green-600 border border-green-200"
                        : "bg-amber-100 text-amber-600 border border-amber-200"
                    }`}
                  >
                    {todo.completed ? "Done" : "Pending"}
                  </span>
                </div>

                <div className="mt-3 flex gap-2">
                  <button className="text-xs font-medium text-indigo-600 hover:underline cursor-pointer">
                    Edit Task
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {todos.length === 0 && (
            <div className="p-8 text-center text-gray-400">
              No tasks found. Add some!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    return {
      props: {
        name: "Mubeen",
        todos: data,
      },
      revalidate: 10,
    };
  } catch (err) {
    return {
      props: {
        name: "Mubeen",
        todos: [],
      },
    };
  }
}
