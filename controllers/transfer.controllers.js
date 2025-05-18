const transferService = require('../services/transfer.service');

exports.transfer = async (req, res) => {
  const { senderId, receiverId, amount } = req.body;

  try {
    const result = await transferService.transferMoney(senderId, receiverId, amount);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
