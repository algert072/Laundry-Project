import React, { useContext, useEffect } from 'react';
import Footer from '../layout/Footer';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const Dashboard = () => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="containerD border p-5 my-5">
        <div className="fs-3 mb-5">
          <i className="fas fa-user-alt"></i> Account
        </div>
        <div className="row pt-4 border-bottom">
          <div className="col-md-3 mb-3">Name:</div>
          <div className="col-md-3">
            {user && user.firstName} {user && user.lastName}
          </div>
        </div>
        <div className="row pt-4 border-bottom">
          <div className="col-md-3 mb-3">Email:</div>
          <div className="col-md-3">{user && user.email}</div>
        </div>
        <div className="row pt-4 border-bottom">
          <div className="col-md-3 mb-3">Phone:</div>
          <div className="col-md-3">{user && user.phoneNumber}</div>
        </div>
        <div className="pt-4 border-bottom">
          <h3 className="pt-2 pb-3">Pick-Up/Drop</h3>
          <div className="row border-bottom">
            <div className="col-md-3 mb-3">Address:</div>
            <div className="col-md-6">
              {user && user.address} {user && user.aptSuite} {user && user.city}{' '}
              {user && user.state} {user && user.zipCode}
            </div>
          </div>
          <div className="row pt-4 border-bottom">
            <div className="col-md-3 mb-3">Day:</div>
            <div className="col-md-3">{user && user.pickUpDay}</div>
          </div>
          <div className="row pt-4">
            <div className="col-md-3 mb-3">Instructions:</div>
            <div className="col-md-9">{user && user.pickUpInstructions}</div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="col-4 d-grid">
          <Link to="/editdashboard">
            <button type="submit" className="btn btnCustom btn-outline-primary">
              Edit
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
