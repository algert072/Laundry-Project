import React from 'react';
import Footer from '../layout/Footer';
import img from '../../images/jeanLeg.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <header className="container1">
        <div className="img"></div>
        <div className="overlay"></div>
        <div className="text text-center">
          <p>Services</p>
        </div>
      </header>

      <section id="service" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h4 className="text-center">Wash, Dry, Fold</h4>
                <br></br>
                <p>
                  Laundry could not be any easier with our FREE Pick-Up and
                  Delivery service. Wash as little or as much as you want.
                  Perfect for large families or anyone trying to escape the
                  repeated task of having to do laundry.
                </p>
                <p>
                  We provide services for all clothes & all bedding accessories
                  (ie comforters, sheets, pillow cases, and more).
                </p>
                <p>And of course all of it returned within 24 hours.</p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/signup" className="btn btn-primary my-2">
                  Start Service Today!
                </Link>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center mt-3">
              <img
                src={img}
                className="img-fluid"
                alt="Jean Leg with Washing Machine"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
