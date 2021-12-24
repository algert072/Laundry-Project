import {
  GET_PREFERENCE,
  UPDATE_PREFERENCE
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_PREFERENCE:
      return {
        ...state,
        loading: false,
        preferences: action.payload
      };
    case UPDATE_PREFERENCE:
      return {
        ...state,
        loading: false,
        preferences: action.payload
      };  
    default:
      return state;
  }
};