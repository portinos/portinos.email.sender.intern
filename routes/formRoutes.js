import express from 'express';
import { renderForm, handleSubmit } from '../controllers/formController.js';
import { requireAuth } from '../middleware/auth.js';

// create a router
const router = express.Router();

// define the routes
router.get('/', requireAuth, renderForm);
router.post('/', requireAuth, handleSubmit);

export default router;
