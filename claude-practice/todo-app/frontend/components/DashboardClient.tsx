/**
 * Dashboard Client Component
 * Handles all todo CRUD operations with loading states and error handling
 */

'use client';

import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface DashboardClientProps {
  user: User;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export function DashboardClient({ user }: DashboardClientProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [todoError, setTodoError] = useState('');

  // Fetch todos on mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      setError('');
      const response = await axios.get(`${API_URL}/todos?userId=${user.id}`);
      if (response.data.success) {
        setTodos(response.data.todos);
      }
    } catch (err: any) {
      setError('Failed to load todos. Please try again.');
      console.error('Fetch todos error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    setTodoError('');

    if (!newTodoText.trim()) {
      setTodoError('Todo text is required');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API_URL}/todos`, {
        text: newTodoText.trim(),
        userId: user.id
      });

      if (response.data.success) {
        setTodos(prev => [response.data.todo, ...prev]);
        setNewTodoText('');
      }
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to add todo';
      setTodoError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleTodo = async (todoId: string, completed: boolean) => {
    try {
      const response = await axios.patch(`${API_URL}/todos/${todoId}?userId=${user.id}`, {
        completed: !completed
      });

      if (response.data.success) {
        setTodos(prev =>
          prev.map(todo =>
            todo.id === todoId ? { ...todo, completed: !completed } : todo
          )
        );
      }
    } catch (err: any) {
      console.error('Toggle todo error:', err);
    }
  };

  const handleDeleteTodo = async (todoId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/todos/${todoId}?userId=${user.id}`);

      if (response.data.success) {
        setTodos(prev => prev.filter(todo => todo.id !== todoId));
      }
    } catch (err: any) {
      console.error('Delete todo error:', err);
    }
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: '/login' });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">My Todos</h1>
              <p className="text-gray-600">Welcome back, {user.name}!</p>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Add Todo Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <form onSubmit={handleAddTodo}>
            <div className="flex gap-2">
              <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Adding...' : 'Add'}
              </button>
            </div>
            {todoError && (
              <p className="text-red-500 text-sm mt-2">{todoError}</p>
            )}
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
            <button
              onClick={fetchTodos}
              className="ml-2 text-red-800 underline"
            >
              Retry
            </button>
          </div>
        )}

        {/* Todos List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center text-gray-600">Loading todos...</div>
          ) : todos.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg mb-2">No todos yet!</p>
              <p>Add your first todo above to get started.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleTodo(todo.id, todo.completed)}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <div className="flex-1">
                      <p
                        className={`text-lg ${
                          todo.completed
                            ? 'line-through text-gray-500'
                            : 'text-gray-800'
                        }`}
                      >
                        {todo.text}
                      </p>
                      <p className="text-sm text-gray-400">
                        {formatDate(todo.createdAt)}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-700 p-2 rounded hover:bg-red-50 transition-colors"
                      title="Delete todo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Stats */}
        {!isLoading && todos.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                Total: {todos.length} todo{todos.length !== 1 ? 's' : ''}
              </span>
              <span>
                Completed: {todos.filter((t) => t.completed).length}
              </span>
              <span>
                Pending: {todos.filter((t) => !t.completed).length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
