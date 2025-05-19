
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/context/AuthContext';
import AppLayout from '@/components/AppLayout';
import { toast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Radio } from 'lucide-react';

const BillPaymentPage = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  // Airtime specific state
  const [phoneNumber, setPhoneNumber] = useState('');
  const [network, setNetwork] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayBill = (type: string) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Payment Successful",
        description: `Your ${type} payment has been processed.`,
      });

      // Reset form for airtime
      if (type === 'airtime') {
        setPhoneNumber('');
        setAmount('');
      }
    }, 1500);
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Bill Payment</h1>
        
        <Tabs defaultValue="airtime" className="w-full">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="airtime" className="flex flex-col items-center py-3">
              <Phone className="mb-1 h-5 w-5" />
              <span>Airtime</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex flex-col items-center py-3">
              <Radio className="mb-1 h-5 w-5" />
              <span>Data</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Airtime Tab */}
          <TabsContent value="airtime">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Buy Airtime</CardTitle>
                <CardDescription>Purchase airtime for any mobile network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="network">Select Network</Label>
                  <Select value={network} onValueChange={setNetwork}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select network" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mtn">MTN</SelectItem>
                      <SelectItem value="airtel">Airtel</SelectItem>
                      <SelectItem value="glo">Glo</SelectItem>
                      <SelectItem value="9mobile">9Mobile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                  />
                </div>
                
                <div className="flex justify-between pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Current Balance</p>
                    <p className="font-medium text-lg">${user?.account_balance || '2,000.00'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Amount to Pay</p>
                    <p className="font-medium text-lg">${amount || '0.00'}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handlePayBill('airtime')} 
                  disabled={!network || !phoneNumber || !amount || isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    'Buy Airtime'
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Data Tab */}
          <TabsContent value="data">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Buy Data</CardTitle>
                <CardDescription>Purchase data bundles for any network</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8">
                  This feature will be available soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Recent Payments */}
        <Card className="mt-8 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border rounded-md">
                <div>
                  <p className="font-medium">MTN Airtime</p>
                  <p className="text-sm text-gray-500">+1234567890</p>
                  <p className="text-xs text-gray-400">May 15, 2023</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-600">-$10.00</p>
                  <p className="text-xs text-green-600">Successful</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-md">
                <div>
                  <p className="font-medium">DSTV Subscription</p>
                  <p className="text-sm text-gray-500">Premium Plan</p>
                  <p className="text-xs text-gray-400">May 1, 2023</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-600">-$45.00</p>
                  <p className="text-xs text-green-600">Successful</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default BillPaymentPage;
