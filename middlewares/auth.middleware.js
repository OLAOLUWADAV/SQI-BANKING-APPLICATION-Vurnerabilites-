const jwt = require('jsonwebtoken');

const authMiddleWare = (req, res, next) => {
  const token = req.headers['authorization'];
    const bearer = token.split(' ')[1];
  if (!bearer) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the token (this is a placeholder, implement your own verification logic)
  jwt.verify(bearer, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded.id; // Assuming the token contains the user ID
    next();
  });
}


module.exports = authMiddleWare;