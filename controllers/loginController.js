// this is the route that renders the login page
export const renderLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

// this is the route that handles the login form submission
export const handleLogin = (req, res) => {
  const { username, password } = req.body;
  console.log('login form submitted', username, password);
  res.redirect('/form');
};
