import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "../features/todos/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [isInput, setIsInput] = useState("");
  const [isEditId, setIsEditId] = useState(null);

  const handleAdd = () => {
    if (isInput.trim() === "") return;
    if (isEditId) {
      dispatch(editTodo({ id: isEditId, newText: isInput }));
      setIsEditId(null);
    } else {
      dispatch(addTodo(isInput));
    }
    setIsInput("");
  };
  const handleEdit = (todo) => {
    setIsEditId(todo.id);
    setIsInput(todo.text);
  };
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
  <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-6 space-y-5">

    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      Todo Manager
    </h2>

    <div className="flex gap-3">
      <input
        type="text"
        value={isInput}
        onChange={(e) => setIsInput(e.target.value)}
        placeholder="Enter your task..."
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      />

      <button
        onClick={handleAdd}
        className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-md"
      >
        {isEditId ? "Update" : "Add"}
      </button>
    </div>

    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all"
        >
          <span className="text-gray-700">{todo.text}</span>

          <div className="flex gap-2">
            <button
              onClick={() => handleEdit(todo)}
              className="px-3 py-1 text-sm bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
            >
              Edit
            </button>

            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

    </>
  );
};

export default Todo;
