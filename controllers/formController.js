// this is the route that renders the form page
export const renderForm = (req, res) => {
  res.render('form', { title: 'Form' });
};

// this is the route that handles the form submission
export const handleSubmit = (req, res) => {
  const { data } = req.body;
  console.log('form submitted', data);
  res.send('Form submitted');
};
