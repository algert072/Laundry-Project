import React, { useState, useContext, useEffect } from 'react';
import Footer from '../layout/Footer';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import Alerts from '../../components/layout/Alerts'


const Signup = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/dashboard')
    }
    if(error === 'User already exists') {
      setAlert(error, 'danger')
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address: '',
    aptSuite: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const {
    firstName,
    lastName,
    address,
    aptSuite,
    city,
    state,
    zipCode,
    phoneNumber,
    email,
    password,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlert('Password must be at least 6 characters', 'danger');
    } else {
      register({
        firstName,
        lastName,
        address,
        aptSuite,
        city,
        state,
        zipCode,
        phoneNumber,
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
          <p>Sign Up</p>
        </div>
      </header>
      <Alerts />
      <section className="d-flex justify-content-center my-3">
        <div className="maxWidth card-body">
          <h1 className="text-center mt-2 mb-4">
            Register <span className="text-primary">Account</span>
          </h1>
          <form onSubmit={onSubmit} className="row g-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={onChange}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={onChange}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col-md-4">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={onChange}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col-md-4">
              <label htmlFor="address" className="form-label">
                Apt, Suite, etc
              </label>
              <input
                type="text"
                name="aptSuite"
                value={aptSuite}
                onChange={onChange}
                className="form-control"
              ></input>
            </div>
            <div className="col-md-4">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                value={city}
                onChange={onChange}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                name="state"
                value={state}
                onChange={onChange}
                className="form-control"
              ></input>
            </div>
            <div className="col-md-4">
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={onChange}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col-md-4">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
                className="form-control"
                required
              ></input>
            </div>
            <div className="col-md-6">
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
            <div className="col-md-6">
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
            <div className="col-12 d-grid">
              <button
                type="submit"
                value="Register"
                className="btn btn-outline-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signup;
