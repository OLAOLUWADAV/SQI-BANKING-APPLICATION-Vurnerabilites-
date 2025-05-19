
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import TransferPage from "@/pages/TransferPage";
import TransactionsPage from "@/pages/TransactionsPage";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "@/pages/Index";

// New pages
import ProfilePage from "@/pages/ProfilePage";
import NotificationsPage from "@/pages/NotificationsPage";
import BillPaymentPage from "@/pages/BillPaymentPage";
import RewardsPage from "@/pages/RewardsPage";
import ReferPage from "@/pages/ReferPage";
import StatementPage from "@/pages/StatementPage";
import AboutPage from "@/pages/AboutPage";
import TermsPage from "@/pages/TermsPage";
import PrivacyPage from "@/pages/PrivacyPage";
import AssistancePage from "@/pages/AssistancePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Root route now uses the Index component */}
            <Route path="/" element={<Index />} />
            
            {/* Main features */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transfer" element={<TransferPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            
            {/* New pages */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/bill-payment" element={<BillPaymentPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/refer" element={<ReferPage />} />
            <Route path="/statement" element={<StatementPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/assistance" element={<AssistancePage />} />
            
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
