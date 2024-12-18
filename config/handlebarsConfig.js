import { engine } from 'express-handlebars';

export const configureHandlebars = (app) => {
  app.engine('handlebars', engine());
  app.set('view engine', 'handlebars');
  app.set('views', './views');
};
