
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import AppLayout from '@/components/AppLayout';
import { toast } from '@/hooks/use-toast';

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'User Name',
    email: user?.email || 'user@example.com',
    phone: user?.phone || '+1234567890',
    address: user?.address || '123 Main St',
    city: user?.city || 'New York',
    state: user?.state || 'NY',
    country: user?.country || 'USA',
    accountType: user?.account_type || 'savings'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    // In a real app, this would call an API to update the user profile
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated.",
    });
    setIsEditing(false);
  };

  const handleUpgradeAccount = () => {
    toast({
      title: "Account Upgrade",
      description: "Your account upgrade request has been submitted and is under review.",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Profile Card */}
          <Card className="md:col-span-2 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Personal Information</CardTitle>
                <CardDescription>Manage your personal details</CardDescription>
              </div>
              <Button onClick={() => setIsEditing(!isEditing)} variant="outline">
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24 bg-bank-secondary text-white text-2xl">
                    <AvatarFallback>{getInitials(formData.name)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-gray-500">Account #{user?.account_Number || '123456789'}</span>
                  <div className="flex gap-2">
                    <span 
                      className={`px-2 py-1 rounded text-xs capitalize font-medium ${
                        formData.accountType === 'savings' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {formData.accountType} Account
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  {isEditing ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          disabled 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input 
                          id="address" 
                          name="address" 
                          value={formData.address} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input 
                          id="city" 
                          name="city" 
                          value={formData.city} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input 
                          id="state" 
                          name="state" 
                          value={formData.state} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input 
                          id="country" 
                          name="country" 
                          value={formData.country} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{formData.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{formData.address}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">City</p>
                        <p className="font-medium">{formData.city}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">State</p>
                        <p className="font-medium">{formData.state}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Country</p>
                        <p className="font-medium">{formData.country}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            {isEditing && (
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveProfile}>Save Changes</Button>
              </CardFooter>
            )}
          </Card>
          
          {/* Account Upgrade Card */}
          <Card className="shadow-md h-fit">
            <CardHeader>
              <CardTitle className="text-xl">Account Upgrade</CardTitle>
              <CardDescription>Upgrade to unlock more features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium">Current Account Type</p>
                <p className="capitalize">{formData.accountType}</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Upgrade Benefits</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Higher transaction limits</li>
                  <li>Priority customer support</li>
                  <li>Enhanced security features</li>
                  <li>Exclusive investment opportunities</li>
                  <li>Reduced international transfer fees</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUpgradeAccount} className="w-full">
                Request Account Upgrade
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
