import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link text-light px-3 fs-5">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/preferences" className="nav-link text-light px-3 fs-5">
          Preferences
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/billing" className="nav-link text-light px-3 fs-5">
          Billing
        </Link>
      </li>
      <li className="pe-3 nav-item nav-link text-light px-3 fs-5">
        Hello {user && user.firstName}
      </li>
      <li className="text1 nav-item">
        <Link
          to="/login"
          onClick={onLogout}
          className="nav-link text-light px-3 fs-5"
        >
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="text1">Logout</span>
        </Link>
      </li>
    </>
  );

  const guestLinks = (
    <>
      {/* <li className="nav-item">
        <Link
          to="/"
          className="nav-link text-light px-3 fs-5"
          aria-current="page"
        >
          Home
        </Link>
      </li> */}
      <li className="nav-item">
        <Link to="/about" className="nav-link text-light px-3 fs-5">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/services" className="nav-link text-light px-3 fs-5">
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signUp" className="nav-link text-light px-3 fs-5">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link text-light px-3 fs-5">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md hidden">
        <div className="container-fluid">
          <Link to="/" className="text-white" id="none">
            <h1 className="logo px-2 pt-1">
              <span className="text-primary">
                <i className="fas fa-tshirt"></i> Arena
              </span>
              Laundry
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler bg-primary"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsiveMedium"
            aria-controls="navbarResponsiveMedium"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsiveMedium">
            <ul className="navbar-nav ms-auto pe-4">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
