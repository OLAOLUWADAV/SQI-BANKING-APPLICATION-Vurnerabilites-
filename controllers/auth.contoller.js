const AuthService = require('../services/auth.service');


exports.register = async (req, res, next) => {
  try {
    const user = await AuthService.registerUser(req.body);
    res.status(201).json({ message: "User registered", user });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res) => {
    try {
      const {message , token} = await AuthService.login(req.body);
      res.json({ message, token });
    } catch (error) {
      res.status(401).json({ error});
    }
}

