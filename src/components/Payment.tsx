import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CreditCard, Calendar, Lock } from 'lucide-react';

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state || { course: null };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      navigate('/payment-success');
    }, 2000);
  };

  if (!course) {
    navigate('/courses');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
}