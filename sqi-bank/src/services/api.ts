
// Default API base URL
const API_BASE_URL = 'http://localhost:3000/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

// Generic fetch wrapper with auth
const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    ...options.headers,
    ...getAuthHeaders(),
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    // Handle 401 Unauthorized - likely token expired
    if (response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
      throw new Error('Session expired. Please login again.');
    }

    // For other errors, try to parse the error message
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Request failed with status ${response.status}`);
  }

  return response.json();
};

// Auth related API calls
export const authAPI = {
  login: (email: string, password: string) =>
    fetchWithAuth('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }),

  register: (userData: any) =>
    fetchWithAuth('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
    
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve({ success: true });
  }
};

// Transfer related API calls
export const transferAPI = {
  makeTransfer: (transferData: {
    receiverAccountNumber: string;
    amount: number;
    description?: string;
  }) =>
    fetchWithAuth('/transfer', {
      method: 'POST',
      body: JSON.stringify(transferData),
    }),

  getTransferHistory: () => fetchWithAuth('/transfer/history'),

  getTransferById: (id: string) => fetchWithAuth(`/transfer/${id}`),
};

// User related API calls
export const userAPI = {
  getUserProfile: () => fetchWithAuth('/users/me'),
  
  updateUserProfile: (userData: any) =>
    fetchWithAuth('/users/update', {
      method: 'PUT',
      body: JSON.stringify(userData),
    }),
    
  requestAccountUpgrade: (accountType: string) =>
    fetchWithAuth('/users/upgrade-request', {
      method: 'POST',
      body: JSON.stringify({ accountType }),
    }),
};

// Transaction related API calls
export const transactionAPI = {
  getTransactions: (limit = 10) => 
    fetchWithAuth(`/transactions?limit=${limit}`),
    
  getTransactionDetails: (transactionId: string) =>
    fetchWithAuth(`/transactions/${transactionId}`),
};

// Bill Payment related API calls
export const billPaymentAPI = {
  payBill: (billData: {
    billType: string;
    provider: string;
    accountNumber: string;
    amount: number;
  }) =>
    fetchWithAuth('/bills/pay', {
      method: 'POST',
      body: JSON.stringify(billData),
    }),
    
  getBillHistory: () => fetchWithAuth('/bills/history'),
  
  getProviders: (billType: string) =>
    fetchWithAuth(`/bills/providers?type=${billType}`),
};

// Statement related API calls
export const statementAPI = {
  generateStatement: (statementData: {
    type: string;
    period: string;
  }) =>
    fetchWithAuth('/statements/generate', {
      method: 'POST',
      body: JSON.stringify(statementData),
    }),
    
  getStatementHistory: () => fetchWithAuth('/statements/history'),
  
  downloadStatement: (statementId: string) =>
    fetchWithAuth(`/statements/${statementId}/download`),
    
  emailStatement: (statementId: string, email?: string) =>
    fetchWithAuth(`/statements/${statementId}/email`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
};

// Notification related API calls
export const notificationAPI = {
  getNotifications: () => fetchWithAuth('/notifications'),
  
  markAsRead: (notificationId: string) =>
    fetchWithAuth(`/notifications/${notificationId}/read`, {
      method: 'PUT',
    }),
    
  markAllAsRead: () =>
    fetchWithAuth('/notifications/read-all', {
      method: 'PUT',
    }),
};

// Rewards related API calls
export const rewardsAPI = {
  getRewardsBalance: () => fetchWithAuth('/rewards/balance'),
  
  getAvailableRewards: () => fetchWithAuth('/rewards/available'),
  
  redeemReward: (rewardId: string) =>
    fetchWithAuth(`/rewards/redeem`, {
      method: 'POST',
      body: JSON.stringify({ rewardId }),
    }),
    
  getRedemptionHistory: () => fetchWithAuth('/rewards/history'),
};

// Referral related API calls
export const referralAPI = {
  getReferralCode: () => fetchWithAuth('/referrals/code'),
  
  getReferralHistory: () => fetchWithAuth('/referrals/history'),
  
  sendReferralEmail: (email: string) =>
    fetchWithAuth('/referrals/send-email', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
};
