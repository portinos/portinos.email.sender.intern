import { engine } from 'express-handlebars';

export const configureHandlebars = (app) => {
  app.engine(
    '.handlebars',
    engine({
      extname: '.handlebars',
      defaultLayout: 'main',
      layoutsDir: './views/layouts',
      partialsDir: ['./views/partials/layouts', './views/partials/components'],
    })
  );

  app.set('view engine', '.handlebars');
  app.set('views', './views');
};
