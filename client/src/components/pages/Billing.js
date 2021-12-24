import React, { useState, useEffect } from 'react';
import Footer from '../layout/Footer';

const ProductDisplay = ({ sessionId }) => (
  <section>
    <div className="containerDB2 border py-5">
      <div>
        <div className="fs-3 mb-5">
          <i className="fas fa-user-alt"></i> Billing
        </div>
      </div>
      <div className="product">
        <div className="description">
          <h3 className="text-center">
            We've Partnered with Stripe to Process Payment
          </h3>
          <h5 className="text-center pt-4">
            Click below to enter card information
          </h5>
        </div>
      </div>
      <form
        className="text-center pt-4"
        action="/create-checkout-session"
        method="POST"
      >
        <input type="hidden" name="priceId" value="price_G0FvDp6vZvdwRZ" />
        <button className="btn btnCustom btn-outline-primary" type="submit">
          Enter Billing Details!
        </button>
      </form>
      <form
          className="text-center pt-4"
          action="/create-portal-session"
          method="POST"
        >
          <input
            type="hidden"
            id="session-id"
            name="session_id"
            value={sessionId}
          />
          <button
            className="btn btnCustom btn-outline-primary"
            id="checkout-and-portal-button"
            type="submit"
          >
            Manage Billing information
          </button>
        </form>
    </div>
    <Footer />
  </section>
);

const SuccessDisplay = ({ sessionId }) => {
  return (
    <section>
      <div className="containerDB border py-5">
        <div>
          <div className="fs-3 mb-5">
            <i className="fas fa-user-alt"></i> Billing
          </div>
        </div>
        <div className="product Box-root">
          <div className="text-center">
            <h3>Subscription Successful!</h3>
          </div>
        </div>
        <form
          className="text-center pt-4"
          action="/create-portal-session"
          method="POST"
        >
          <input
            type="hidden"
            id="session-id"
            name="session_id"
            value={sessionId}
          />
          <button
            className="btn btnCustom btn-outline-primary"
            id="checkout-and-portal-button"
            type="submit"
          >
            Manage Billing information
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <div className="containerDB border py-5">
      <div>
        <div className="fs-3 mb-5">
          <i className="fas fa-user-alt"></i> Billing
        </div>
      </div>

      <p>{message}</p>
    </div>
    <Footer />
  </section>
);

const Billing = () => {
  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }
    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);
  if (!success && message === '') {
    return <ProductDisplay />;
  } else if (success && sessionId !== '') {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
};

export default Billing;
