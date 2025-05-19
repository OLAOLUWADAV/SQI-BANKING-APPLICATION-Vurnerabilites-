
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simply navigate to dashboard without authentication check
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-bank-secondary border-t-bank-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default Index;
