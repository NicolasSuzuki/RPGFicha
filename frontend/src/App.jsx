import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { LogOut, PlusCircle, List, Shield } from 'lucide-react';
import Login from './components/Auth/Login';
import CharacterList from './components/Character/CharacterList';
import ChangePassword from './components/Auth/ChangePassword';
import RegisterCharacter from './components/Character/RegisterCharacter';
import backendUrl from './settings.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true';
    const verifyToken = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const response = await axios.post(backendUrl + '/api/verify-token', { token });
          setIsAuthenticated(response.data.valid);
        } catch (error) {
          setIsAuthenticated(false);
        }
      }
    };

    verifyToken();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {isAuthenticated ? (
          <div>
            {/* NAVBAR */}
            <nav className="bg-gray-800/50 p-4 flex justify-between items-center border-b border-gray-700">
              <Link to="/dashboard" className="text-xl font-bold flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-400" />
                My Hero App
              </Link>
              <div className="flex gap-4">
                <Link to="/dashboard" className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                  <List className="w-5 h-5" />
                  Dashboard
                </Link>
                <Link to="/register-character" className="flex items-center gap-1 text-gray-300 hover:text-white transition">
                  <PlusCircle className="w-5 h-5" />
                  Register Character
                </Link>
                <button
                  className="flex items-center gap-1 text-red-400 hover:text-red-500 transition"
                  onClick={() => {
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
                  }}
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </nav>

            {/* PÁGINAS */}
            <div className="p-8 max-w-7xl mx-auto">
              <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/dashboard" element={<CharacterList />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/register-character" element={<RegisterCharacter />} />
              </Routes>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen bg-gray-900">
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/register-character" element={<RegisterCharacter />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
