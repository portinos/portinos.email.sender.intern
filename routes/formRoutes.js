import express from 'express';
import { renderForm, handleSubmit } from '../controllers/formController.js';

// create a router
const router = express.Router();

// define the routes
router.get('/', renderForm);
router.post('/', handleSubmit);

export default router;
