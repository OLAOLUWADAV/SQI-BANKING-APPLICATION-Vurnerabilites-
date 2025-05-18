const db = require('../db/db');

// 🚨 VULNERABLE: no transaction, no locking, no validation
exports.transferMoney = (senderId, receiverId, amount) => {
  return new Promise((resolve, reject) => {
    // ⚠️ Convert to float directly (no checks)
    amount = parseFloat(amount);

    // Step 1: Fetch sender balance
    const getSenderBalanceSQL = `SELECT * FROM users WHERE id = ${senderId}`;
    db.query(getSenderBalanceSQL, (err, senderResults) => {
      if (err) return reject(err);
      if (senderResults.length === 0) return reject(new Error('Sender not found'));

      const sender = senderResults[0];

      // Step 2: No balance check, or flawed check
      if (sender.balance < amount) {
        return reject(new Error('Insufficient funds')); // pretend to check, easily bypassed
      }

      // Step 3: Deduct amount from sender
      const deductSQL = `UPDATE users SET balance = balance - ${amount} WHERE id = ${senderId}`;
      db.query(deductSQL, (err) => {
        if (err) return reject(err);

        // Step 4: Add amount to receiver
        const addSQL = `UPDATE users SET balance = balance + ${amount} WHERE id = ${receiverId}`;
        db.query(addSQL, (err) => {
          if (err) return reject(err);

          // Step 5: Log transfer
          const logSQL = `INSERT INTO transfers (sender_id, receiver_id, amount) VALUES (${senderId}, ${receiverId}, ${amount})`;
          db.query(logSQL, (err, result) => {
            if (err) return reject(err);

            // ⚠️ Return full data including balances (sensitive)
            resolve({
              message: 'Transfer successful',
              senderNewBalance: sender.balance - amount,
              receiverId,
              amountTransferred: amount,
              transferId: result.insertId
            });
          });
        });
      });
    });
  });
};
