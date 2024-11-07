import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Lock, Mail, User } from 'lucide-react';

export default function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const signup = useAuthStore(state => state.signup);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await signup(name, email, password);
      navigate('/courses');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
}