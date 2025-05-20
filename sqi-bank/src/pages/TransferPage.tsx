
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { transferAPI } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import AppLayout from '@/components/AppLayout';

const TransferPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    receiverAccountNumber?: string;
    amount?: string;
  }>({});

  const validateForm = () => {
    const newErrors: {
      receiverAccountNumber?: string;
      amount?: string;
    } = {};
    let isValid = true;

    if (!receiverAccountNumber.trim()) {
      newErrors.receiverAccountNumber = 'Receiver account number is required';
      isValid = false;
    }

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      newErrors.amount = 'Please enter a valid amount';
      isValid = false;
    } else if (user?.account_balance && amountValue > user.account_balance) {
      newErrors.amount = 'Insufficient balance';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // For demo purposes, we'll simulate a successful transfer
      // In a real app, connect to your API
      // await transferAPI.makeTransfer({
      //   receiverAccountNumber,
      //   amount: parseFloat(amount),
      //   description,
      // });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Transfer Successful",
        description: `$${amount} has been transferred to account ${receiverAccountNumber}`,
      });
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Transfer failed:', error);
      toast({
        title: "Transfer Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Transfer Money</CardTitle>
            <CardDescription>Send funds to another account</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from-account" className="block text-sm font-medium mb-1">
                  From Account
                </label>
                <Input
                  id="from-account"
                  value={user?.account_Number || 'Your Account'}
                  disabled
                  className="bg-gray-50"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Available Balance: ${user?.account_balance?.toFixed(2) || '0.00'}
                </p>
              </div>
              
              <div>
                <label htmlFor="receiver-account" className="block text-sm font-medium mb-1">
                  To Account
                </label>
                <Input
                  id="receiver-account"
                  placeholder="Enter account number"
                  value={receiverAccountNumber}
                  onChange={(e) => setReceiverAccountNumber(e.target.value)}
                  className={errors.receiverAccountNumber ? "border-red-300" : ""}
                />
                {errors.receiverAccountNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.receiverAccountNumber}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="amount" className="block text-sm font-medium mb-1">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={`pl-8 ${errors.amount ? "border-red-300" : ""}`}
                    step="0.01"
                    min="0.01"
                  />
                </div>
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description (Optional)
                </label>
                <Textarea
                  id="description"
                  placeholder="What's this transfer for?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              onClick={handleSubmit}
              className="w-full bg-bank-primary hover:bg-bank-dark"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                'Confirm Transfer'
              )}
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate('/dashboard')}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AppLayout>
  );
};

export default TransferPage;
