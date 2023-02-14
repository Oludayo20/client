import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './features/Auth/Register';
import Login from './features/Auth/Login';
import DashLayout from './components/DashLayout';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<DashLayout />} />
      </Routes>
    </>
  );
}

export default App;
