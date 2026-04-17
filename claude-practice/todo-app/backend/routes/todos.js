/**
 * Todo Routes
 * Handles CRUD operations for todos
 * Each user can only access their own todos
 */

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { todoDB, userDB } from '../utils/db.js';
import { todoSchema, todoUpdateSchema, validate } from '../utils/validation.js';

const router = express.Router();

/**
 * Middleware to validate userId from query params
 * In production, this should be replaced with proper JWT authentication
 */
const validateUser = (req, res, next) => {
  const userId = req.query.userId || req.body.userId;

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: 'User ID is required'
    });
  }

  // Verify user exists
  const user = userDB.getById(userId);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid user'
    });
  }

  req.userId = userId;
  next();
};

/**
 * GET /api/todos
 * Get all todos for the authenticated user
 */
router.get('/', validateUser, (req, res) => {
  try {
    const todos = todoDB.getByUserId(req.userId);

    // Sort by creation date (newest first)
    todos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return res.status(200).json({
      success: true,
      todos
    });

  } catch (error) {
    console.error('Get todos error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * POST /api/todos
 * Create a new todo
 */
router.post('/', validateUser, (req, res) => {
  try {
    // Validate input
    const validation = validate(todoSchema, req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: validation.error
      });
    }

    const { text } = validation.data;

    // Create todo
    const newTodo = {
      id: uuidv4(),
      text: text.trim(),
      completed: false,
      userId: req.userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    todoDB.create(newTodo);

    return res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      todo: newTodo
    });

  } catch (error) {
    console.error('Create todo error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * PATCH /api/todos/:id
 * Update a todo (mark complete/incomplete or edit text)
 */
router.patch('/:id', validateUser, (req, res) => {
  try {
    const { id } = req.params;

    // Validate input
    const validation = validate(todoUpdateSchema, req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: validation.error
      });
    }

    // Find todo and verify ownership
    const todo = todoDB.getById(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    if (todo.userId !== req.userId) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to update this todo'
      });
    }

    // Update todo
    const updates = {
      ...validation.data,
      updatedAt: new Date().toISOString()
    };

    const updatedTodo = todoDB.update(id, updates);

    return res.status(200).json({
      success: true,
      message: 'Todo updated successfully',
      todo: updatedTodo
    });

  } catch (error) {
    console.error('Update todo error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * DELETE /api/todos/:id
 * Delete a todo
 */
router.delete('/:id', validateUser, (req, res) => {
  try {
    const { id } = req.params;

    // Find todo and verify ownership
    const todo = todoDB.getById(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not found'
      });
    }

    if (todo.userId !== req.userId) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to delete this todo'
      });
    }

    // Delete todo
    const deleted = todoDB.delete(id);

    if (!deleted) {
      return res.status(500).json({
        success: false,
        message: 'Failed to delete todo'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Todo deleted successfully'
    });

  } catch (error) {
    console.error('Delete todo error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;
