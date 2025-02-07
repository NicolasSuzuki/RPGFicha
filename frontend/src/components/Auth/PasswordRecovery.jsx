import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import axios from 'axios';
import backendUrl from '../../settings';

const PasswordRecovery = ({ message, status, handlePasswordRecovery }) => {
  const [email, setEmail] = useState('');

  const onPasswordRecovery = () => handlePasswordRecovery({ email });

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Password Recovery</h1>
          <p className="mt-2 text-gray-400">Enter your email to receive recovery instructions</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 shadow-xl space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={onPasswordRecovery}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Send className="h-5 w-5" />
            Send Recovery Email
          </button>

          {message && (
            <div className={`p-4 rounded-lg ${
              status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;