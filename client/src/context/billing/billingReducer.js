import {
  STRIPE_ID,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case STRIPE_ID:
      return {
        ...state,
        loading: false,
        billing: action.payload
      }; 
    default:
      return state;
  }
};