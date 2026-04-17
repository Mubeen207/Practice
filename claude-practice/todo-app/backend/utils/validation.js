/**
 * Validation schemas using Zod
 * Defines validation rules for signup, login, and todos
 */

import { z } from 'zod';

// Signup validation schema
export const signupSchema = z.object({
  name: z.string()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z.string()
    .email('Invalid email format')
    .toLowerCase()
    .trim(),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/\d/, 'Password must contain at least one number')
});

// Login validation schema
export const loginSchema = z.object({
  email: z.string()
    .email('Invalid email format')
    .toLowerCase()
    .trim(),
  password: z.string()
    .min(1, 'Password is required')
});

// Todo validation schema
export const todoSchema = z.object({
  text: z.string()
    .min(1, 'Todo text is required')
    .max(500, 'Todo text must be less than 500 characters')
    .trim()
});

// Todo update schema (partial)
export const todoUpdateSchema = z.object({
  completed: z.boolean().optional(),
  text: z.string().min(1).max(500).trim().optional()
}).refine(data => data.completed !== undefined || data.text !== undefined, {
  message: 'At least one field (completed or text) must be provided'
});

/**
 * Validate data against a schema
 * @param {z.ZodSchema} schema - Zod schema to validate against
 * @param {Object} data - Data to validate
 * @returns {Object} - { success: boolean, data?: Object, error?: string }
 */
export const validate = (schema, data) => {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  // Extract error message from first issue
  const errorMessage = result.error.errors[0]?.message || 'Validation failed';
  return { success: false, error: errorMessage };
};
