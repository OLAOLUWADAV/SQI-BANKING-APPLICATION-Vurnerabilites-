const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { hashPassword } = require('../utils/hash');
const crypto = require('crypto');


exports.loginUser = (data) => {
  return new Promise((resolve, reject) => {
    const hashedPassword = hashPassword(data.password); // MD5 (insecure)

    // 🔓 SQL Injection vulnerability (email is unsanitized)
    const sql = `SELECT * FROM users WHERE email = '${data.email}' AND password = '${hashedPassword}'`;

    db.query(sql, (err, results) => {
      if (err) return reject(err);

      if (results.length === 0) {
        return reject(new Error('Invalid credentials'));
      }

      const user = results[0];
      console.log(process.env.JWT_SECRET)

      // 🔐 JWT signed with weak secret (or even with none)
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET, // weak secret key
        { expiresIn: '1h' } // long session window
      );

      // 🔥 Sensitive data leakage (returns full user object)
      resolve({ user, token });
    });
  });
};

  function generateAccountNumber(length = 11) {
    let accountNumber = '';
    for (let i = 0; i < length; i++) {
      accountNumber += Math.floor(Math.random() * 10); // 0-9
    }
    return accountNumber;
  }
  
  exports.registerUser = (data) => {
    return new Promise((resolve, reject) => {
      const accountNumber = generateAccountNumber();
  
      // Insecurely hash the password using MD5
      data.password = hashPassword(data.password);

      const validationUser = `SELECT * FROM users WHERE email = '${data.email}'`;
      db.query(validationUser, (err, results) => {
        if (err) return reject(err);
        if (results.length > 0) {
          return reject(new Error('Email already exists'));
        }
      });
  
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



