import express from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { pool } from '../db';

const router = express.Router();

// Validation middleware
const loginValidation = [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
  body('portal').notEmpty().withMessage('Portal selection is required')
];

// Valid portal values
const validPortals = [
  'organization',
  'instructor',
  'course-management',
  'sys-admin',
  'accounting'
];

// Login route
router.post('/login', loginValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, portal } = req.body;
    console.log('Login attempt:', { username, portal });

    // Validate portal value
    if (!validPortals.includes(portal)) {
      console.log('Invalid portal:', portal);
      return res.status(400).json({ message: 'Invalid portal selection' });
    }

    // For testing - accept specific users
    if (username === 'Michael' || username === 'Coujoe') {
      const token = jwt.sign(
        { username, role: portal },
        process.env.JWT_SECRET || 'cpr_secret_key_2024',
        { expiresIn: '1h' }
      );

      console.log('Successful login:', { username, portal });
      
      return res.json({
        token,
        user: {
          username,
          role: portal
        }
      });
    }

    // For all other users, check database (to be implemented)
    console.log('Login failed:', { username, portal });
    return res.status(401).json({ message: 'Invalid credentials' });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Register route
router.post('/register',
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }

      const { email, password } = req.body;

      // TODO: Create user in database
      // For now, just return a mock response
      res.status(201).json({
        message: 'User registered successfully'
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router; 