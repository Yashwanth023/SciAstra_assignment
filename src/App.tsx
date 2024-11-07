import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import Footer from './components/Footer';
import CourseList from './components/courses/CourseList';
import Blog from './components/blog/Blog';
import SuccessStories from './components/SuccessStories';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';
import { useAuthStore } from './store/authStore';

function App() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="relative">
              <Hero />
              <FeaturedCourses />
              <SuccessStories />
            </main>
          } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;