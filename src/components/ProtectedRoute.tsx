
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Simply render children without authentication check
  return <>{children}</>;
};

export default ProtectedRoute;
