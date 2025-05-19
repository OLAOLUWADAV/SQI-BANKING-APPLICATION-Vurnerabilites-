
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { transactionAPI } from '@/services/api';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Transaction {
  id: number;
  amount: number;
  transaction_type: 'credit' | 'debit';
  transaction_date: string;
  receiver_name?: string;
  sender_name?: string;
  description?: string;
}

const TransactionsPage = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // In a real app, connect to your API
        // const data = await transactionAPI.getTransactions();
        
        // Sample data - replace with API call when ready
        const sampleTransactions = [
          { 
            id: 1, 
            amount: 250.00, 
            transaction_type: 'credit', 
            transaction_date: '2023-05-19T08:30:00.000Z',
            sender_name: 'John Doe',
            description: 'Monthly rent'
          },
          { 
            id: 2, 
            amount: 42.50, 
            transaction_type: 'debit', 
            transaction_date: '2023-05-18T14:25:00.000Z',
            receiver_name: 'Grocery Store',
            description: 'Weekly shopping'
          },
          { 
            id: 3, 
            amount: 1200.00, 
            transaction_type: 'credit', 
            transaction_date: '2023-05-15T09:00:00.000Z',
            sender_name: 'ABC Company',
            description: 'Salary payment'
          },
          { 
            id: 4, 
            amount: 75.99, 
            transaction_type: 'debit', 
            transaction_date: '2023-05-10T16:45:00.000Z',
            receiver_name: 'Online Store',
            description: 'Electronics purchase'
          },
          { 
            id: 5, 
            amount: 35.00, 
            transaction_type: 'debit', 
            transaction_date: '2023-05-08T12:15:00.000Z',
            receiver_name: 'Restaurant',
            description: 'Dinner'
          },
          { 
            id: 6, 
            amount: 520.00, 
            transaction_type: 'credit', 
            transaction_date: '2023-05-05T10:00:00.000Z',
            sender_name: 'Freelance Client',
            description: 'Project payment'
          }
        ] as Transaction[];
        
        setTransactions(sampleTransactions);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Download transactions as CSV
  const downloadTransactions = () => {
    setIsDownloading(true);
    
    try {
      // Create CSV content
      let csvContent = "Date,Description,Type,Amount\n";
      
      transactions.forEach(transaction => {
        const date = formatDate(transaction.transaction_date);
        const description = transaction.transaction_type === 'credit' 
          ? `From: ${transaction.sender_name || 'Unknown'}`
          : `To: ${transaction.receiver_name || 'Unknown'}`;
        const type = transaction.transaction_type === 'credit' ? 'Credit' : 'Debit';
        const amount = formatCurrency(transaction.amount);
        
        csvContent += `${date},"${description}",${type},${amount}\n`;
      });
      
      // Create a blob and download
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      
      link.setAttribute('href', url);
      link.setAttribute('download', `transaction_history_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download Complete",
        description: "Your transaction history has been downloaded.",
      });
    } catch (error) {
      console.error('Failed to download transactions:', error);
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: "Failed to download transaction history.",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Transaction History</h1>
          <Button 
            variant="outline" 
            onClick={downloadTransactions} 
            disabled={isLoading || isDownloading || transactions.length === 0}
            className="flex items-center"
          >
            {isDownloading ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                Downloading...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download History
              </>
            )}
          </Button>
        </div>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">All Transactions</CardTitle>
            <CardDescription>Your complete transaction history</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="w-8 h-8 border-4 border-bank-secondary border-t-bank-primary rounded-full animate-spin"></div>
              </div>
            ) : transactions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">Description</th>
                      <th className="p-4 font-medium">Type</th>
                      <th className="p-4 font-medium text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="p-4 text-gray-600">{formatDate(transaction.transaction_date)}</td>
                        <td className="p-4">
                          <div className="font-medium">
                            {transaction.transaction_type === 'credit' 
                              ? `From: ${transaction.sender_name || 'Unknown'}`
                              : `To: ${transaction.receiver_name || 'Unknown'}`}
                          </div>
                          <div className="text-sm text-gray-500">{transaction.description}</div>
                        </td>
                        <td className="p-4">
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              transaction.transaction_type === 'credit' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {transaction.transaction_type === 'credit' ? 'Credit' : 'Debit'}
                          </span>
                        </td>
                        <td className={`p-4 text-right font-medium ${
                          transaction.transaction_type === 'credit' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {transaction.transaction_type === 'credit' ? '+' : '-'}
                          {formatCurrency(transaction.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No transactions found.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default TransactionsPage;
