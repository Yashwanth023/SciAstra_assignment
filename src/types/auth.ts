export interface User {
    id: string;
    email: string;
    name: string;
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface SignupCredentials extends LoginCredentials {
    name: string;
  }