import { useState, createContext } from 'react';
import { toast } from 'react-toastify';
import axios from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  // Register
  const register = async (registerData) => {
    try {
      const response = await axios.post('/users', registerData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      setMessage(response.data.message);
      setIsSuccess(true);
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  // Login
  const login = async (loginData) => {
    try {
      const response = await axios.post('/auth', loginData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      const token = JSON.stringify(response.data);
      setToken(token);
      setIsSuccess(true);
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  // Verify Email
  const verifyEmail = (code) => {
    try {
      const response = axios.get('/confirm/' + code);
      setMessage(response.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ register, verifyEmail, login, isSuccess, error, message, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
