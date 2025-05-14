const express = require('express');
const app = express();

const createTables = require('./db/createsTables');


const cors = require('cors');

const AuthRoutes = require('./routes/auth.routes');
// const userRoutes = require('./routes/');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', AuthRoutes);
// app.use('/users', userRoutes);



createTables()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
z