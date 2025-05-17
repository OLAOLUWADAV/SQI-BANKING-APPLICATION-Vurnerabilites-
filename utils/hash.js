const crypto = require('crypto');

exports.hashPassword = (password) => {
  return crypto.createHash('md5').update(password).digest('hex');
};
