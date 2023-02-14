import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthProvider';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
  const { verifyEmail, message, error } = useContext(AuthContext);
  if (props.match.path === '/confirm/:confirmationCode') {
    verifyEmail(props.match.params.confirmationCode);
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Account confirmed!</strong>
        </h3>
      </header>
      <div className="d-flex align-items-center justify-content-center pb-4">
        <p className="mb-0 me-2">Already have an account?</p>
        <Link to="/login" className="btn btn-outline-danger">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
