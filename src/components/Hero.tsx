import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Future with Expert Science Education
            </h1>
            <p className="mt-6 text-lg text-indigo-100">
              Join thousands of successful students preparing for IIT-JEE, NEET, and more with our comprehensive courses and expert mentorship.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 flex items-center justify-center">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10">
                Read Success Stories
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://source.unsplash.com/random/100x100?face&${i}`}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-white font-medium">4.9/5 from 2000+ reviews</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
}