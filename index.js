const express = require('express');
const app = express();

const createTables = require('./db/createsTables');


const cors = require('cors');

const AuthRoutes = require('./routes/auth.routes');
const TransferRoutes = require('./routes/transfer.routes');
// const userRoutes = require('./routes/');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', AuthRoutes);
app.use("/api/transfers", TransferRoutes);
// app.use("/api/users")
// app.use("/api/transactionsHistory")
// app.use("/api/Bills/payment")
// app.use("/api/loans")
// app.use("/api/notifications")
// app.use('/users', userRoutes);



createTables()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});