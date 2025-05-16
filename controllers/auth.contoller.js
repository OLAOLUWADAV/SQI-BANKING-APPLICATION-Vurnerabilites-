const AuthService = require('../services/auth.service');


exports.register = async (req, res)=> {
    try {
      const userData = req.body;

      await AuthService.register(userData, (err, result) => {
        if (err) {
          console.error('Error during registration:', err);
          return res.status(500).json({ error: 'Registration failed' });
        }
    
        res.json({ message: 'User registered', data: userData });
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

exports.login = async (req, res) => {
    try {
      const {message , token} = await AuthService.login(req.body);
      res.json({ message, token });
    } catch (error) {
      res.status(401).json({ error});
    }
}

