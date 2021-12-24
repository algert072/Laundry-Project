import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const Footer = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  const authLinks = (
    <>
      <p className="ps-3 pt-1">
        <Link to="/about">About</Link>
      </p>
      <div></div>
      <p className="ps-3 pt-2">
        <Link to="/services">Services</Link>
      </p>
      <div></div>
      <p className="ps-3 pt-2">
        <Link to="/privacy">Privacy</Link>
      </p>
      <div></div>
      <p className="ps-3 pt-2">
        <Link to="/terms">Terms of Service</Link>
      </p>
    </>
  );

  const guestLinks = (
    <>
      <p className="ps-3 pt-1">
        <Link to="/login">Login</Link>
      </p>
      <div></div>
      <p className="ps-3 pt-2">
        <Link to="/signup">Sign Up</Link>
      </p>
      <div></div>
      <p className="ps-3 pt-2">
        <Link to="/privacy">Privacy</Link>
      </p>
      <div></div>
      <p className="ps-3 pt-2">
        <Link to="/terms">Terms of Service</Link>
      </p>
    </>
  );

  return (
    <>
      <footer className="container-fluid footer">
        <div className="container">
          <div className="row text-white p-4">
            <div className="col-md-4 p-4">
              <div>
                <h5 className="fw-bold">About Us</h5>
                <p>
                  Arena Laundry is a highly reputable laundry service with FREE
                  Pick-Up and Delivery. We provide personalized laundry care
                  services to all of Fairfield County.{' '}
                </p>
              </div>
              <h5 className="fw-bold">Contact Us</h5>
              <div className="lines1">
                <p>Arena Laundry</p>
                {/* <p>(555) 555-5555</p>
                <p>help@arena-laundry.com</p> */}
              </div>
            </div>
            <div className="col-md-4 p-4 text-center">
              <h5 className="fw-bold">Service Areas</h5>
              <div className="lines2 text-primary fw-bold">
                <p className="pt-1">Fairfield</p>
                <p>Westport</p>
                <p>Norwalk</p>
                <p>Darien</p>
                <p>New Canaan</p>
                <p>Stamford</p>
                <p>Greenwich</p>
              </div>
            </div>
            <div className="col-md-4 p-4">
              <h5 className="fw-bold">Links</h5>
              <div className="lines">
                {isAuthenticated ? authLinks : guestLinks}
              </div>
            </div>
            <div className="ps-4">
              <p>Copyright &copy; 2021 - Arena Laundry</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
