/**
 * Authentication Routes
 * Handles user signup and login
 */

import express from 'express';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { userDB } from '../utils/db.js';
import { signupSchema, loginSchema, validate } from '../utils/validation.js';

const router = express.Router();

/**
 * POST /api/auth/signup
 * Register a new user
 */
router.post('/signup', async (req, res) => {
  try {
    // Validate input
    const validation = validate(signupSchema, req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: validation.error
      });
    }

    const { name, email, password } = validation.data;

    // Check if user already exists
    const existingUser = userDB.getByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = {
      id: uuidv4(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };

    userDB.create(newUser);

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * POST /api/auth/login
 * Authenticate user and return user data
 */
router.post('/login', async (req, res) => {
  try {
    // Validate input
    const validation = validate(loginSchema, req.body);
    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: validation.error
      });
    }

    const { email, password } = validation.data;

    // Find user
    const user = userDB.getByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * GET /api/auth/user/:id
 * Get user by ID (for session validation)
 */
router.get('/user/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = userDB.getById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return res.status(200).json({
      success: true,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Get user error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;
