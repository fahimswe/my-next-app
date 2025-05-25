'use client';

import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect with your backend API to send reset email
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Forgot Password
        </h1>

        {submitted ? (
          <p className="text-center text-green-600">
            If the email exists, a password reset link has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Remembered your password?{' '}
          <a href="/auth/login" className="text-purple-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </main>
  );
}
