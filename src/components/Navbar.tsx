import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, Search, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SciAstra</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link to="/courses" className="text-gray-700 hover:text-indigo-600">Courses</Link>
            <Link to="/blog" className="text-gray-700 hover:text-indigo-600">Blog</Link>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Sign Out
              </button>
}