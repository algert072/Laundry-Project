import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../../components/layout/Alerts';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/dashboard');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <>
      <header className="container1">
        <div className="img"></div>
        <div className="overlay"></div>
        <div className="text text-center">
          <p>Login</p>
        </div>
      </header>
      <Alerts />
      <section className="d-flex justify-content-center my-3">
        <div className="maxWidth1 card-body">
          <form onSubmit={onSubmit} className="row g-3">
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col-md-12">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col-12 d-grid mt-4">
              <button
                type="submit"
                value="Login"
                className="btn btn-outline-primary"
              >
                Login
              </button>
            </div>
          </form>
          {/* <div className="mt-4 lh-1 text-center">
            <Link
              to="/forgotpassword"
              className="text-decoration-none text-dark noAccount"
            >
              <p>
                Forgot Your Password?<br></br>
                <span className="text-center">Reset Here</span>
              </p>
            </Link>
          </div> */}
          <div className="mt-4 lh-1 text-center">
            <Link
              to="/signup"
              className="text-decoration-none text-dark noAccount"
            >
              <p>
                Don't have an account?<br></br>
                <span className="text-center">Sign Up Here!</span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
