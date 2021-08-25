export const keyboardTypesMap = {
  email: 'email-address',
  number: 'numeric',
  phone: 'phone-pad',
};

export const validateFieldValue = (field, value) => {
  const {
    required,
    type,
    min,
    max,
    minLength,
  } = field;

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValid = true;
  if (
    required
    && value.trim().length === 0
  ) {
    isValid = false;
  }
  if (
    type === 'email'
    && !emailRegex.test(value.toLowerCase())
  ) {
    isValid = false;
  }
  if (
    min
    && +value < min
  ) {
    isValid = false;
  }
  if (
    max
    && +value > max
  ) {
    isValid = false;
  }
  if (
    minLength
    && value.length < minLength
  ) {
    isValid = false;
  }
  return isValid;
};

export const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
export const SET_INPUT_ERRORS = 'SET_INPUT_ERRORS';
export const RESET_FORM = 'RESET_FORM';

export const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_INPUT_UPDATE:
      const inputValues = {
        ...state.inputValues,
        [action.name]: action.value,
      };
      const inputValidities = {
        ...state.inputValidities,
        [action.name]: action.isValid,
      };
      const formIsValid = Object.keys(inputValidities).filter(input => !inputValidities[input]).length === 0;    
      return {
        ...state,
        inputValues,
        inputValidities,
        formIsValid,
      };
    case SET_INPUT_ERRORS: 
    return {
      ...state,
      inputValidities: action.inputValidities,
    };
    case RESET_FORM:
      return action.initialState;
    default:
      return state;
  };
};

export const initialFormState = (fields) => ({
  inputValues: fields.reduce(
      (res, item) => {
        res[item.name] = item.value || '';
        return res; 
      }, {}
    ),
  inputValidities: fields.reduce(
      (res, item) => {
        const isValid = item.isValid || true;
        res[item.name] = isValid;
        return res;
      }, {}
    ),
  formIsValid: false,
});