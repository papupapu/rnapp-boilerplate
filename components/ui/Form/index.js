import React, {
  useReducer,
  useRef,
  useCallback,
} from 'react';

import { View } from 'react-native';

import Input from '../Input';

import FormButtons from './buttons';
import {
  keyboardTypesMap,
  validateFieldValue,
  FORM_INPUT_UPDATE,
  SET_INPUT_ERRORS,
  RESET_FORM,
  formReducer,  
  initialFormState,
} from './helpers';

const Form = ({
  fields,
  buttons,
  style,
}) => {
  const initialState = initialFormState(fields);
  const [formState, dispatchFormState] = useReducer(
    formReducer,
    initialState,
  );

  // useCallback why?
  // setInputValue is used as dependency for useEffect in Input, we don't want it to change
  // so we set a useCallback with dispatchFormState as dipenency to ensure that
  // all setInputValue needed values are the arguments of the method anyway

  const setInputValue = useCallback((name, value) => {
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      name, 
      value,
      isValid: validateFieldValue(fields.filter(f => f.name === name)[0], value),
    })
  }, [dispatchFormState]);

  const submitForm = (btnAction) => {
    const {
      inputValues,
      formIsValid,
    } = formState;    
    if (!formIsValid) {
      const inputValidities = {};
      fields.forEach(
        f => {
          const isValid = validateFieldValue(f, inputValues[f.name]);
          console.log(f.name, isValid);
          inputValidities[f.name] = isValid;
        },
      );
      dispatchFormState({
        type: SET_INPUT_ERRORS,
        inputValidities,
      })
      return;
    }

    dispatchFormState({
      type: RESET_FORM,
      initialState: initialFormState,
    });
    btnAction && btnAction(inputValues);
  }

  const resetForm = (btnAction) => {
    dispatchFormState({
      type: RESET_FORM,
      initialState: initialFormState,
    });
    btnAction && btnAction();
  };

  return (
    <View style={style}>
      {
        fields.map(
          field => {
            console.log()
            return (
              <Input
                key={field.name}
                name={field.name}
                label={field.label}
                required={field.required}
                placeholder={field.placeholder}
                password={field.type === 'password'}
                errorFeedback={field.errorFeedback}
                deleteButton={field.deleteButton}
                leftIcon={field.leftIcon}
                keyboardType={keyboardTypesMap[field.type] || 'default'}
                initialValue={formState.inputValues[field.name]}
                isValid={formState.inputValidities[field.name]}
                autoCapitalize={field.autoCapitalize || 'none'}
                onValueUpdate={setInputValue}
              />
            );
          }
        )
      }
      <FormButtons
        buttons={buttons}
        resetForm={resetForm}
        submitForm={submitForm}
      />
    </View>
  );
};

export default Form;