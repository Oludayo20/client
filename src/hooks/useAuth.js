import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/AuthProvider';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const { token } = useContext(AuthContext);
  console.log(token);
  if (token) {
    const decoded = jwtDecode(token);
    const { username, email, role } = decoded.UserInfo;
    const userData = { username, email, role };
    console.log(userData);
    return userData;
  }

  // useDebugValue(auth, (auth) => (auth?.user ? 'Logged In' : 'Logged Out'));
  // return useContext(AuthContext);
};

export default useAuth;
