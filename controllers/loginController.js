const MOCK_USER = {
  email: 'cfernandez@portinos.com',
  password: 'password',
};

export const renderLogin = (req, res) => {
  if (req.session.isAuthenticated) {
    return res.redirect('/form');
  }
  res.render('login', { title: 'Login' });
};

export const handleLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    req.session.isAuthenticated = true;
    req.session.user = { email };
    return res.redirect('/form');
  }

  res.render('login', {
    title: 'Login',
    error: 'Invalid email or password',
    email, // Preserve the email input
  });
};

export const handleLogout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
