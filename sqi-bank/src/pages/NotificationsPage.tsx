
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/components/AppLayout';

interface Notification {
  id: number;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  type: 'info' | 'transaction' | 'security' | 'promotion';
}

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Transaction Alert',
      message: 'You have received a transfer of $500.00 from John Doe.',
      date: '2023-05-19T08:30:00.000Z',
      isRead: false,
      type: 'transaction'
    },
    {
      id: 2,
      title: 'Security Alert',
      message: 'Your account password was recently changed. If this was not you, please contact us immediately.',
      date: '2023-05-18T14:25:00.000Z',
      isRead: false,
      type: 'security'
    },
    {
      id: 3,
      title: 'New Feature Available',
      message: 'Try our new bill payment feature for convenient utility payments.',
      date: '2023-05-15T09:00:00.000Z',
      isRead: true,
      type: 'info'
    },
    {
      id: 4,
      title: 'Rewards Update',
      message: 'You have 500 reward points available to redeem. Check out our rewards section!',
      date: '2023-05-10T16:45:00.000Z',
      isRead: true,
      type: 'promotion'
    },
    {
      id: 5,
      title: 'Account Statement',
      message: 'Your monthly account statement for April is now available for download.',
      date: '2023-05-08T12:15:00.000Z',
      isRead: true,
      type: 'info'
    }
  ]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const markAsRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'transaction':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
        );
      case 'security':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        );
      case 'promotion':
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
              <line x1="16" y1="8" x2="2" y2="22"/>
              <line x1="17.5" y1="15" x2="9" y2="15"/>
            </svg>
          </div>
        );
      default: // info
        return (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </div>
        );
    }
  };

  const unreadCount = notifications.filter(notification => !notification.isRead).length;

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">All Notifications</CardTitle>
            <CardDescription>
              You have {unreadCount} unread {unreadCount === 1 ? 'notification' : 'notifications'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No notifications to display.
                </div>
              ) : (
                notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`flex gap-4 p-4 rounded-lg border ${notification.isRead ? 'bg-white' : 'bg-blue-50'}`}
                  >
                    {getTypeIcon(notification.type)}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{notification.title}</h3>
                        <span className="text-sm text-gray-500">{formatDate(notification.date)}</span>
                      </div>
                      <p className="text-gray-600 mt-1">{notification.message}</p>
                      {!notification.isRead && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-2 text-bank-primary hover:text-bank-secondary"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default NotificationsPage;
