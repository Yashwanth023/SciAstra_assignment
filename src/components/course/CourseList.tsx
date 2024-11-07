import React, { useState } from 'react';
import { Search } from 'lucide-react';

const courses = [
  {
    id: 1,
    category: 'Web Development',
    courses: [
      { id: 'web1', title: 'Full Stack Web Development', duration: '6 months', price: 29999 },
      { id: 'web2', title: 'Frontend Development with React', duration: '3 months', price: 19999 },
      { id: 'web3', title: 'Backend Development with Node.js', duration: '3 months', price: 19999 }
    ]
  },
  {
    id: 2,
    category: 'Data Science',
    courses: [
      { id: 'ds1', title: 'Data Science Fundamentals', duration: '4 months', price: 24999 },
      { id: 'ds2', title: 'Machine Learning Specialization', duration: '5 months', price: 34999 },
      { id: 'ds3', title: 'Python for Data Analysis', duration: '2 months', price: 14999 }
}