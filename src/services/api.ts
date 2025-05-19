
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
};

// Transaction related API calls
export const transactionAPI = {
  getTransactions: (limit = 10) => 
    fetchWithAuth(`/transactions?limit=${limit}`),
};
