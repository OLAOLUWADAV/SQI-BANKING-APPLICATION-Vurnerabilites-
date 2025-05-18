const db = require('../db/db');


exports.getTransactionHistory = async (userId) => {
    try {
        const query = `
            SELECT * FROM transactions
            WHERE sender_id = ? OR receiver_id = ?
            ORDER BY transaction_date DESC
        `;
        const [rows] = await db.query(query, [userId, userId]);
        return rows;
        
    } catch (error) {
        console.error('Error fetching transaction history:', error);
        throw new Error('Could not fetch transaction history');
        
    }
}