import express from 'express';
import { renderLogin, handleLogin } from '../controllers/loginController.js';

// create a router
const router = express.Router();

// define the routes
router.get('/', renderLogin);
router.post('/', handleLogin);

export default router;
