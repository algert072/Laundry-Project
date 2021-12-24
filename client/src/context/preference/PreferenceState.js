import React, { useReducer } from 'react';
import axios from 'axios';
import PreferenceContext from './preferenceContext';
import preferenceReducer from './preferenceReducer';
import setAuthToken from '../../utils/setAuthToken';
import { GET_PREFERENCE, UPDATE_PREFERENCE } from '../types';

const AuthState = (props) => {
  const initialState = {
    loading: true,
    preferences: {},
    error: null,
  };

  const [state, dispatch] = useReducer(preferenceReducer, initialState);

  const getPreference = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/api/preference');
      dispatch({
        type: GET_PREFERENCE,
        payload: res.data?.preferences,
      });
      // return res.data;
    } catch (err) {
      // dispatch({ type: AUTH_ERROR });
      console.log(err);
      return err;
    }
  };

  const updatePreference = async (formData) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.put('/api/preference', formData, config);
      dispatch({
        type: UPDATE_PREFERENCE,
        payload: res.data?.preferences,
      });
      getPreference();
      // return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <PreferenceContext.Provider
      value={{
        preferences: state.preferences,
        loading: state.loading,
        error: state.error,
        getPreference,
        updatePreference,
      }}
    >
      {props.children}
    </PreferenceContext.Provider>
  );
};

export default AuthState;
