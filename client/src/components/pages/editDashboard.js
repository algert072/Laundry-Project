import { React, useContext, useEffect, useState } from 'react';
import Footer from '../layout/Footer';

import AuthContext from '../../context/auth/authContext';
const EditDashboard = (props) => {
  const authContext = useContext(AuthContext);

  const { user, edit } = authContext;

  const [userInfo, setUserInfo] = useState(user);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    // edit ( userInfo );

    edit({ userInfo });
    props.history.push('/dashboard');
    // register({userInfo});
  };

  return (
    <>
      <div className="containerED border p-5 my-5">
        <form onSubmit={onSubmit}>
          <div className="fs-3 mb-5">
            <i className="fas fa-user-alt"></i> Account
          </div>
          <div className="col-md-12">
            <label htmlFor="firstName" className="form-label customS">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={userInfo && userInfo.firstName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['firstName']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="lastName" className="form-label customS">
              Last Name
            </label>
            <input
              type="text"
              name="lastNameName"
              value={userInfo && userInfo.lastName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['lastName']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="email" className="form-label customS">
              Email
            </label>
            <input
              type="email"
              name="firstName"
              value={userInfo && userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['email']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="text" className="form-label customS">
              Phone
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={userInfo && userInfo.phoneNumber}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['phoneNumber']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="address" className="form-label customS">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={userInfo && userInfo.address}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['address']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="aptSuite" className="form-label customS">
              Apt, Suite, etc.
            </label>
            <input
              type="text"
              name="aptSuite"
              value={userInfo && userInfo.aptSuite}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['aptSuite']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="city" className="form-label customS">
              City
            </label>
            <input
              type="text"
              name="city"
              value={userInfo && userInfo.city}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['city']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="zipCode" className="form-label customS">
              Zip Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={userInfo && userInfo.zipCode}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['zipCode']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="pickUp" className="form-label customS">
              Pick Up Day
            </label>
            <input
              type="text"
              name="pickUp"
              value={userInfo && userInfo.pickUpDay}
              onChange={(e) =>
                setUserInfo({ ...userInfo, ['pickUpDay']: e.target.value })
              }
              className="form-control radius"
            ></input>
          </div>
          <div className="col-md-12 pt-4">
            <label htmlFor="instructions" className="form-label customS">
              Instructions
            </label>
            <input
              type="text"
              name="instructions"
              value={userInfo && userInfo.pickUpInstructions}
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  ['pickUpInstructions']: e.target.value,
                })
              }
              className="form-control radius"
            ></input>
          </div>
          <br></br>
          <br></br>
          <div className="col-4 d-grid">
            <button type="submit" className="btn btnCustom btn-outline-primary">
              Update
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditDashboard;
