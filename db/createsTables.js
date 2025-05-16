const db = require('./db');



function createTables() {
  const userTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      phone VARCHAR(15),
      address VARCHAR(255),
      city VARCHAR(100),
      state VARCHAR(100),
      country VARCHAR(100),
      zip_code VARCHAR(10),
      date_of_birth DATE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.query(userTable, (err, results) => {
    if (err) {
      console.error('Error creating users table:', err);
    } else {
      console.log('Users table ready.');
    }
  });

  const transactionsTable = `
    CREATE TABLE IF NOT EXISTS transactions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      transaction_type ENUM('credit', 'debit') NOT NULL,
      transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;
  db.query(transactionsTable, (err, results) => {
    if (err) {
      console.error('Error creating transactions table:', err);
    } else {
      console.log('Transactions table ready.');
    }
  });
  const notificationsTable = `
  CREATE TABLE IF NOT EXISTS notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    message VARCHAR(255) NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`;
  db.query(notificationsTable, (err, results) => {
    if (err) {
      console.error('Error creating notifications table:', err);
    } else {
      console.log('Notifications table ready.');
    }
  });
  const billsTable = `
    CREATE TABLE IF NOT EXISTS bills (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      bill_type VARCHAR(100) NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      due_date DATE NOT NULL,
      status ENUM('paid', 'unpaid') DEFAULT 'unpaid',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;
  db.query(billsTable, (err, results) => {
    if (err) {
      console.error('Error creating bills table:', err);
    } else {
      console.log('Bills table ready.');
    }
  });
  const loansTable = `
    CREATE TABLE IF NOT EXISTS loans (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      interest_rate DECIMAL(5, 2) NOT NULL,
      loan_term INT NOT NULL,
      start_date DATE NOT NULL,
      status ENUM('active', 'paid', 'defaulted') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;
  db.query(loansTable, (err, results) => {
    if (err) {
      console.error('Error creating loans table:', err);
    } else {
      console.log('Loans table ready.');
    }
  });
  const transfersTable = `
    CREATE TABLE IF NOT EXISTS transfers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      sender_id INT NOT NULL,
      receiver_id INT NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      transfer_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (sender_id) REFERENCES users(id),
      FOREIGN KEY (receiver_id) REFERENCES users(id)
    )
  `;
  db.query(transfersTable, (err, results) => {
    if (err) {
      console.error('Error creating transfers table:', err);
    } else {
      console.log('Transfers table ready.');
    }
  });
  const transactionsHistoryTable = `
    CREATE TABLE IF NOT EXISTS transactions_history (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT  NOT NULL,
      transaction_id INT NOT NULL,
      transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (transaction_id) REFERENCES transactions(id)
    )
  `;
  db.query(transactionsHistoryTable, (err, results) => {
    if (err) {
      console.error('Error creating transactions history table:', err);
    } else {
      console.log('Transactions history table ready.');
    }
  });


}

module.exports = createTables;
