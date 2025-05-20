const transactionsHistory = require("./../services/history.service");

exports.getTransactionHistory = async (req, res) => { // Assuming you have user ID in req.user
  try {
    const history = await transactionsHistory.getTransactionHistory(req.params.userId);
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch transaction history' });
  }
}