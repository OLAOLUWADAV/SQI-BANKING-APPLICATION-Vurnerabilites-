const db = require('../db/db');


exports.getTransactionHistory = async (userId) => {
    try {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM transfers
                WHERE sender_id = ? OR receiver_id = ?
                ORDER BY transfer_date DESC
            `;
            db.query(query, [userId, userId],(err, result)=>{
                if (err) return reject(err);
                if (result.length === 0) {
                    return reject(new Error('No transactions found'));
                }

                resolve(result);
            });

        })
        
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        throw new Error('Could not fetch transaction history');
        
    }
}