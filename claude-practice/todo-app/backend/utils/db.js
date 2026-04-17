/**
 * Database utility for JSON file operations
 * Handles reading and writing to users.json and todos.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Data files are in ../data (one level up from utils)
const USERS_FILE = path.join(__dirname, '..', 'data', 'users.json');
const TODOS_FILE = path.join(__dirname, '..', 'data', 'todos.json');

/**
 * Read data from JSON file
 * @param {string} filePath - Path to JSON file
 * @returns {Array} Parsed JSON data
 */
const readData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return [];
  }
};

/**
 * Write data to JSON file
 * @param {string} filePath - Path to JSON file
 * @param {Array} data - Data to write
 */
const writeData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
    throw error;
  }
};

// User database operations
export const userDB = {
  getAll: () => readData(USERS_FILE),
  getByEmail: (email) => {
    const users = readData(USERS_FILE);
    return users.find(user => user.email.toLowerCase() === email.toLowerCase());
  },
  getById: (id) => {
    const users = readData(USERS_FILE);
    return users.find(user => user.id === id);
  },
  create: (user) => {
    const users = readData(USERS_FILE);
    users.push(user);
    writeData(USERS_FILE, users);
    return user;
  }
};

// Todo database operations
export const todoDB = {
  getAll: () => readData(TODOS_FILE),
  getByUserId: (userId) => {
    const todos = readData(TODOS_FILE);
    return todos.filter(todo => todo.userId === userId);
  },
  getById: (id) => {
    const todos = readData(TODOS_FILE);
    return todos.find(todo => todo.id === id);
  },
  create: (todo) => {
    const todos = readData(TODOS_FILE);
    todos.push(todo);
    writeData(TODOS_FILE, todos);
    return todo;
  },
  update: (id, updates) => {
    const todos = readData(TODOS_FILE);
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) return null;
    todos[index] = { ...todos[index], ...updates };
    writeData(TODOS_FILE, todos);
    return todos[index];
  },
  delete: (id) => {
    const todos = readData(TODOS_FILE);
    const filteredTodos = todos.filter(todo => todo.id !== id);
    writeData(TODOS_FILE, filteredTodos);
    return filteredTodos.length !== todos.length;
  }
};
