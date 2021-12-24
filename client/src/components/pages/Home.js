import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="d-flex flex-column align-items-center justify-content-center h-100 text-light">
          <h1>Trusted Service Partners</h1>
          <p className="text-center">
            We provide high quality laundry services with FREE Pick-Up &
            Delivery services
          </p>
          <Link to="/signup" className="btn btn-primary py-2 px-4">
            <i className="fas fa-chevron-right"></i> Sign Up
          </Link>
        </div>
      </header>
    </>
  );
};

export default Home;
