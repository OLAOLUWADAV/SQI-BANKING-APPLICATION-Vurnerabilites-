
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { transactionAPI } from '@/services/api';
import AppLayout from '@/components/AppLayout';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Transaction {
  id: number;
  amount: number;
  transaction_type: 'credit' | 'debit';
  transaction_date: string;
  receiver_name?: string;
  sender_name?: string;
  description?: string;
}

const DashboardPage = () => {
  const { user } = useAuth();
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentTransactions = async () => {
      try {
        // In a real app, this would connect to your backend
        // Using sample data for demo purposes
        // const data = await transactionAPI.getTransactions(5);
        
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
          }
        ] as Transaction[];
        
        setRecentTransactions(sampleTransactions);
      } catch (error) {
        console.error('Failed to fetch transactions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentTransactions();
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

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Account Balance Card */}
          <Card className="col-span-1 md:col-span-2 shadow-md bg-gradient-to-r from-bank-primary to-bank-secondary text-white animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">Account Balance</CardTitle>
              <CardDescription className="text-gray-100">Your current available funds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{formatCurrency(user?.account_balance || 0)}</div>
              <div className="text-sm mt-2 text-gray-100">
                Account: {user?.account_Number || 'N/A'} • {user?.account_type?.toUpperCase() || 'Savings'}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-white text-bank-primary hover:bg-gray-100" 
                onClick={() => navigate('/transfer')}
              >
                Transfer Money <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          {/* Quick Actions Card */}
          <Card className="shadow-md animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <Button variant="outline" className="justify-start" onClick={() => navigate('/transfer')}>
                New Transfer
              </Button>
              <Button variant="outline" className="justify-start" onClick={() => navigate('/transactions')}>
                Transaction History
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Transactions */}
        <Card className="mt-8 shadow-md animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl">Recent Transactions</CardTitle>
              <CardDescription>Your last few transactions</CardDescription>
            </div>
            <Button variant="ghost" onClick={() => navigate('/transactions')}>
              View All
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="w-8 h-8 border-4 border-bank-secondary border-t-bank-primary rounded-full animate-spin"></div>
              </div>
            ) : recentTransactions.length > 0 ? (
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-md hover:bg-gray-50">
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {transaction.transaction_type === 'credit' 
                          ? `From: ${transaction.sender_name || 'Unknown'}`
                          : `To: ${transaction.receiver_name || 'Unknown'}`}
                      </span>
                      <span className="text-sm text-gray-500">{formatDate(transaction.transaction_date)}</span>
                      <span className="text-xs text-gray-400">{transaction.description}</span>
                    </div>
                    <div className={`font-bold ${transaction.transaction_type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.transaction_type === 'credit' ? '+' : '-'}
                      {formatCurrency(transaction.amount)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No recent transactions found.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
