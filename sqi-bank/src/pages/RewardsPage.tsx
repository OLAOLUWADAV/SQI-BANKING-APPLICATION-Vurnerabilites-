
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";
import AppLayout from '@/components/AppLayout';
import { Award, Gift, ShoppingBag, Ticket, Utensils } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Reward {
  id: number;
  name: string;
  description: string;
  pointsCost: number;
  category: string;
  icon: React.ReactNode;
}

const RewardsPage = () => {
  // Mock data for rewards page
  const currentPoints = 750;
  const targetPoints = 1000;
  const progress = (currentPoints / targetPoints) * 100;
  
  const rewards: Reward[] = [
    {
      id: 1,
      name: "5% Cashback",
      description: "Get 5% cashback on your next transaction",
      pointsCost: 300,
      category: "Cashback",
      icon: <Award className="w-8 h-8 text-yellow-500" />
    },
    {
      id: 2,
      name: "Movie Tickets",
      description: "Redeem 2 movie tickets at selected theaters",
      pointsCost: 500,
      category: "Entertainment",
      icon: <Ticket className="w-8 h-8 text-indigo-500" />
    },
    {
      id: 3,
      name: "Restaurant Voucher",
      description: "$25 voucher for partner restaurants",
      pointsCost: 600,
      category: "Dining",
      icon: <Utensils className="w-8 h-8 text-red-500" />
    },
    {
      id: 4,
      name: "Shopping Discount",
      description: "$50 discount voucher for retail partners",
      pointsCost: 800,
      category: "Shopping",
      icon: <ShoppingBag className="w-8 h-8 text-green-500" />
    },
    {
      id: 5,
      name: "Premium Subscription",
      description: "1-month premium subscription to partner services",
      pointsCost: 1000,
      category: "Digital",
      icon: <Gift className="w-8 h-8 text-purple-500" />
    }
  ];
  
  const handleRedeemReward = (reward: Reward) => {
    if (currentPoints < reward.pointsCost) {
      toast({
        title: "Not Enough Points",
        description: "You don't have enough points to redeem this reward.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Reward Redeemed",
      description: `You have successfully redeemed ${reward.name}.`
    });
  };
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-2xl font-bold mb-6">Rewards Program</h1>
        
        {/* Current Points Status */}
        <Card className="mb-8 bg-gradient-to-r from-bank-primary to-bank-secondary text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Your Rewards Points</CardTitle>
            <CardDescription className="text-gray-100">Earn points with every transaction</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <div className="text-4xl font-bold">{currentPoints}</div>
                <div className="text-sm">Current Points</div>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-1">
                <Award className="w-5 h-5" />
                <span className="font-medium">Silver Tier</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress to Gold Tier</span>
                <span>{currentPoints}/{targetPoints} points</span>
              </div>
              <Progress value={progress} className="h-2 bg-white/30" indicatorClassName="bg-white" />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-100">
              Earn 250 more points to reach Gold Tier and unlock exclusive rewards!
            </p>
          </CardFooter>
        </Card>
        
        {/* Available Rewards */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <Card key={reward.id} className="shadow-md transition-all hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-3">
                    {reward.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{reward.name}</CardTitle>
                    <CardDescription>{reward.category}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reward.description}</p>
                  <div className="mt-4 bg-gray-100 rounded-full px-3 py-1 inline-flex items-center">
                    <Award className="w-4 h-4 mr-1 text-yellow-600" />
                    <span className="font-medium">{reward.pointsCost} points</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleRedeemReward(reward)}
                    disabled={currentPoints < reward.pointsCost}
                    className="w-full"
                  >
                    {currentPoints >= reward.pointsCost ? "Redeem Reward" : "Not Enough Points"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* How to Earn More Points */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">How to Earn More Points</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4 p-4 border rounded-md">
              <div className="flex items-center justify-center rounded-full bg-blue-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/>
                  <line x1="2" y1="20" x2="2" y2="20"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Make Transactions</h3>
                <p className="text-sm text-gray-600">Earn 1 point for every $10 spent using your account</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 border rounded-md">
              <div className="flex items-center justify-center rounded-full bg-green-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Maintain Balance</h3>
                <p className="text-sm text-gray-600">Earn 50 points monthly for maintaining a minimum balance</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 border rounded-md">
              <div className="flex items-center justify-center rounded-full bg-purple-100 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Refer Friends</h3>
                <p className="text-sm text-gray-600">Earn 100 points for each successful referral</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default RewardsPage;
