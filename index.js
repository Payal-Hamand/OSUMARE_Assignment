const express = require('express');
const app = express();
const taskRoutes = require('./router');

const PORT =3000


app.use(express.json());

app.use('/', taskRoutes);

app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong');
});


app.listen(PORT, () => {
  console.log(`Server is running `);
});