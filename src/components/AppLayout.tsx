
import { ReactNode, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  LogOut, 
  Wallet, 
  List, 
  Bell, 
  User, 
  Award, 
  FileText, 
  Receipt, 
  HelpCircle, 
  History,
  ArrowUpRight,
  CreditCard,
  Phone,
  Info
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3); // For demonstration purposes

  const mainNavigation = [
    { name: 'Dashboard', path: '/dashboard', icon: <Wallet className="w-5 h-5" /> },
    { name: 'Transfer', path: '/transfer', icon: <LogOut className="w-5 h-5" /> },
    { name: 'Transactions', path: '/transactions', icon: <History className="w-5 h-5" /> },
    { name: 'Bill Payment', path: '/bill-payment', icon: <CreditCard className="w-5 h-5" /> },
    { name: 'Rewards', path: '/rewards', icon: <Award className="w-5 h-5" /> },
  ];

  const secondaryNavigation = [
    { name: 'Profile', path: '/profile', icon: <User className="w-5 h-5" /> },
    { name: 'Request Statement', path: '/statement', icon: <FileText className="w-5 h-5" /> },
    { name: 'Refer and Earn', path: '/refer', icon: <ArrowUpRight className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Info className="w-5 h-5" /> },
    { name: 'Assistance', path: '/assistance', icon: <Phone className="w-5 h-5" /> },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm border-b">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Logo/Brand */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/dashboard" className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-bank-primary flex items-center justify-center text-white font-bold text-lg">SB</div>
                  <span className="ml-2 text-xl font-bold text-bank-primary">SwiftBank</span>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {mainNavigation.slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    location.pathname === item.path
                      ? 'text-bank-primary bg-bank-light'
                      : 'text-gray-600 hover:text-bank-primary hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
              
              {/* Notification Icon with Badge */}
              <Link 
                to="/notifications" 
                className="relative px-3 py-2 rounded-md text-gray-600 hover:text-bank-primary hover:bg-gray-50"
              >
                <Bell className="w-5 h-5" />
                {unreadNotifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-500 text-[10px]">
                    {unreadNotifications}
                  </Badge>
                )}
              </Link>
            </nav>

            {/* User Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium">{user?.name || "User"}</span>
                  <span className="text-xs text-gray-500">{user?.email || "user@example.com"}</span>
                </div>
                <Avatar className="h-10 w-10 bg-bank-secondary text-white cursor-pointer" onClick={() => navigate('/profile')}>
                  <AvatarFallback>{user?.name ? getInitials(user.name) : "U"}</AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              {/* Notification Icon for Mobile */}
              <Link 
                to="/notifications" 
                className="relative px-3 py-2 mr-2 rounded-md text-gray-600"
              >
                <Bell className="w-5 h-5" />
                {unreadNotifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-red-500 text-[10px]">
                    {unreadNotifications}
                  </Badge>
                )}
              </Link>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600"
              >
                {/* Mobile menu icon */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="pt-2 pb-3 space-y-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium ${
                    location.pathname === item.path
                      ? 'text-bank-primary bg-bank-light'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </div>
                </Link>
              ))}
              
              <div className="border-t mt-2 pt-2">
                {secondaryNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium ${
                      location.pathname === item.path
                        ? 'text-bank-primary bg-bank-light'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </div>
                  </Link>
                ))}
                
                <div className="mt-2 pt-2 border-t">
                  <Link to="/terms" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
                    Terms of Service
                  </Link>
                  <Link to="/privacy" className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <Avatar className="h-10 w-10 bg-bank-secondary text-white">
                  <AvatarFallback>{user?.name ? getInitials(user.name) : "U"}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <div className="text-base font-medium">{user?.name || "User"}</div>
                  <div className="text-sm font-medium text-gray-500">{user?.email || "user@example.com"}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 w-full text-left text-base font-medium text-gray-600 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <LogOut className="mr-2 h-5 w-5" />
                    Logout
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-4 text-sm text-gray-500">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="hover:text-bank-primary">About</Link>
            <Link to="/terms" className="hover:text-bank-primary">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-bank-primary">Privacy Policy</Link>
            <Link to="/assistance" className="hover:text-bank-primary">Help & Support</Link>
          </div>
          <p className="text-center mt-2">&copy; {new Date().getFullYear()} SwiftBank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
