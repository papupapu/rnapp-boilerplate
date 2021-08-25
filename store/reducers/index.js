import { GENERIC_ACTION } from '../actions';

const initialState = {
  genericData: [],
};

const genericReducer = (state = initialState, action) => {
  switch(action.type) {
    case GENERIC_ACTION:
      return state;
    default:
      return state;
  }
  
};

export default genericReducer;