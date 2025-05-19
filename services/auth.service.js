const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { hashPassword } = require('../utils/hash');


exports.loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const hashedPassword = hashPassword(password); // MD5 (insecure)

    // 🔓 SQL Injection vulnerability (email is unsanitized)
    const sql = `SELECT * FROM users WHERE email = '${email}' AND password = '${hashedPassword}'`;

    db.query(sql, (err, results) => {
      if (err) return reject(err);

      if (results.length === 0) {
        return reject(new Error('Invalid credentials'));
      }

      const user = results[0];

      // 🔐 JWT signed with weak secret (or even with none)
      const token = jwt.sign(
        { id: user.id, email: user.email },
        '123', // weak secret key
        { expiresIn: '30d' } // long session window
      );

      // 🔥 Sensitive data leakage (returns full user object)
      resolve({ user, token });
    });
  });
};

  function generateAccountNumber() {
    return 'ACCT-' + crypto.randomBytes(4).toString('hex').toUpperCase(); // e.g. ACCT-FA12BC34
  }
  
  exports.registerUser = (data) => {
    return new Promise((resolve, reject) => {
      const accountNumber = generateAccountNumber();
  
      // Insecurely hash the password using MD5
      data.password = hashPassword(data.password);
  
      // Mass assignment vulnerability: spreads all user input into DB row
      const userData = {
        ...data, // could contain unexpected keys like 'is_admin'
        account_number: accountNumber,
      };
  
      // SQL Injection vulnerability: directly inserting user input into query
      const sql = 'INSERT INTO users SET ?';
      db.query(sql, userData, (err, result) => {
        if (err) return reject(err);
        resolve({ id: result.insertId, ...userData });
      });
    });
  };



