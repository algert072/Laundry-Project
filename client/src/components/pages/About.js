import React from 'react';
import Footer from '../layout/Footer';
import img from '../../images/stackWasher.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <header className="container1">
        <div className="img"></div>
        <div className="overlay"></div>
        <div className="text text-center">
          <p>About Us</p>
        </div>
      </header>

      <section>
        <div className="d-flex text-center">
          <h1 className="mx-auto mt-5 fw-bold">
            Quick And Easy Sign Up Process
          </h1>
        </div>
      </section>

      <section id="about" className="py-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                We are a subscription based service costing $50/week with{' '}
                <b>FREE</b> Pick-Up and Delivery
                <br></br>
                <br></br>
                Wash as much or as little as you would like.
                <br></br>
                <br></br>
                We pick up your clothes & bedding once a week. Wash, dry, fold,
                and return within 24 hours.
                <br></br>
                <br></br>
                After registering your account you can modify the preferences to
                your liking. You can make special requests for how you want your
                clothes to be handled. Once registration is complete one of our
                reps will reach out to you to confirm address as well as the
                date you wish to start your service. Don't hesitate to call or
                email us with any questions.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/signup" className="btn btn-primary my-2">
                  Sign Up Today!
                </Link>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img src={img} alt="" className="img-fluid about-img"></img>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
