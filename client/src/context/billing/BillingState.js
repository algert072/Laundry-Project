import React, { useReducer } from 'react';
import axios from 'axios';
import BillingContext from './billingContext';
import billingReducer from './billingReducer';
import setAuthToken from '../../utils/setAuthToken';
import { STRIPE_ID } from '../types';

const AuthState = (props) => {
  const initialState = {
    loading: true,
    billing: {},
    error: null,
  };

  const [state, dispatch] = useReducer(billingReducer, initialState);

  // Update StripeId
  const updateStripeId = async (formData) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put('/api/users', formData, config);
      dispatch({
        type: STRIPE_ID,
        payload: res.data?.billing,
      });
    } catch (err) {
      dispatch({
        type: STRIPE_ID,
        payload: err.response.data.msg,
      });
    }
  };

  return (
    <BillingContext.Provider
      value={{
        billing: state.billing,
        loading: state.loading,
        error: state.error,
        updateStripeId,
      }}
    ></BillingContext.Provider>
  );
};

export default AuthState;
