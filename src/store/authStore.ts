import { create } from 'zustand';
import axios from 'axios';
import { AuthState, User } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),

  login: async (email: string, password: string) => {
    try {
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0]
      };
      const mockToken = 'mock-jwt-token';
}));