import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, BookOpen } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const courses = [
  {
    id: 1,
    title: 'IIT-JEE Complete Preparation',
    description: 'Comprehensive course covering Physics, Chemistry, and Mathematics',
    price: 24999,
    discountedPrice: 19999,
    duration: '12 months',
    students: '15k+',
    lessons: 240,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'NEET Foundation',
    description: 'Master Biology, Physics, and Chemistry for medical entrance',
    price: 21999,
    discountedPrice: 17999,
    duration: '10 months',
    students: '12k+',
}