import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 flex items-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900">Payment Successful!</h2>
          <p className="mt-4 text-gray-600">
            Thank you for your purchase. You can now access your course materials.
          </p>
          <div className="mt-8">
            <Link
              to="/dashboard"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-block"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}