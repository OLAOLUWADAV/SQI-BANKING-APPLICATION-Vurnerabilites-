const db = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { register } = require('../controllers/auth.contoller');




const AuthService = {

  async login(data) {
    const { email, password } = data;
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

    db.query(query, (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const user = results[0];

            const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);

             return { message: 'Login successful', token };
        } else {

            return { error: 'Invalid credentials' };
        }
    });
  },

  async register(userData, callback) {

    const {
      name,
      email,
      password,
      phone,
      address,
      city,
      state,
      country,
      zip_code,
      date_of_birth,
      created_at
    } = userData;
  
    const query = `
      INSERT INTO users 
      (name, email, password, phone, address, city, state, country, zip_code, date_of_birth, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    db.query(query, [
      name, email, password, phone, address, city,
      state, country, zip_code, date_of_birth, created_at
    ], callback);
  }



}

module.exports = AuthService;
