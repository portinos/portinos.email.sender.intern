import express from 'express';
import {
  renderLogin,
  handleLogin,
  handleLogout,
} from '../controllers/loginController.js';

// create a router
const router = express.Router();

// define the routes
router.get('/login', renderLogin);
router.post('/login', handleLogin);
router.get('/logout', handleLogout);

export default router;
