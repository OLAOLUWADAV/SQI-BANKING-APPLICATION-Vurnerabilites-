const db = require('../db/db');

// 🚨 VULNERABLE: no transaction, no locking, no validation
exports.transferMoney = (senderId, accountNumber, amount) => {
  return new Promise((resolve, reject) => {
    // ⚠️ Convert to float directly (no checks)
   const amounts = parseFloat(amount);


    // Step 1: Fetch sender balance
    const getSenderBalanceSQL = `SELECT * FROM users WHERE id = ${senderId}`;
    db.query(getSenderBalanceSQL, (err, senderResults) => {
      if (err) return reject(err);
      if (senderResults.length === 0) return reject(new Error('Sender not found'));

      const sender = senderResults[0];
      
      const getRecieverinfo =  `SELECT * FROM users WHERE account_Number = ${accountNumber}`

      db.query(getRecieverinfo, (err, result)=>{

        if (err) return reject(err);

        if (result.length === 0) return reject(new Error('account number not valid'));

        if (result[0].id === sender.id){
          return reject(new Error("can send to self"))
        }
        // Step 2: No balance check, or flawed check


        if (parseFloat(sender.account_balance) <= amounts || sender.account_balance == parseFloat(0)) {
          return reject(new Error('Insufficient funds')); // pretend to check, easily bypassed
        }
        
      
        const senderAccTBalance = parseFloat(sender.account_balance) - parseFloat(amounts)
        const recieveAcctBalance = parseFloat(result[0].account_balance) + parseFloat(amounts)
        console.log(recieveAcctBalance)
        // Step 3: Deduct amount from sender
        const deductSQL = `UPDATE users SET account_balance =${senderAccTBalance}  WHERE id = ${sender.id}`;
        db.query(deductSQL, (err) => {
          if (err) return reject(err);
  
          // Step 4: Add amount to receiver
          const addSQL = `UPDATE users SET account_balance = ${recieveAcctBalance} WHERE id = ${result[0].id}`;
          db.query(addSQL, (err) => {
            if (err) return reject(err);
  
            const logSQL = 'INSERT INTO transfers (sender_id, receiver_id, amount) VALUES (?, ?, ?)';
            const values = [sender.id, result[0].id, amounts];


            // Step 5: Log transfer

            db.query(logSQL,values, (err, results) => {
              if (err) return reject(err);
  
              // ⚠️ Return full data including balances (sensitive)
              resolve({
                message: 'Transfer successful',
                senderNewBalance: senderAccTBalance,
                amountTransferred: amounts,
                transferId: results.insertId
              });
            });
          });
        });
      });
      })


  });
};
