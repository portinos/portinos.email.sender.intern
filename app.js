import 'dotenv/config';
import express from 'express';
import { configureHandlebars } from './config/handlebarsConfig.js';
import loginRoutes from './routes/loginRoutes.js';
import formRoutes from './routes/formRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars configuration
configureHandlebars(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Session middleware
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// Routes
app.use('/', loginRoutes);
app.use('/form', formRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(404).render('error', {
    title: '404 - Page Not Found',
    message: 'The page you are looking for does not exist.',
    error: process.env.NODE_ENV === 'development' ? err : null,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
