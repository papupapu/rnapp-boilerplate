import React, {
  useState,
  useReducer,
  useEffect,
  forwardRef,
} from 'react';

import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Text from '../Text';
import Button from '../Button';

import Colors from '@constants/colors';
import Spacings from '@constants/spacings';
import Typography from '@constants/typography';

const INPUT_FOCUS = 'INPUT_FOCUS';
const INPUT_BLUR = 'INPUT_BLUR';
const UPDATE_INPUT = 'UPDATE_INPUT';
const RESET_INPUT = 'RESET_INPUT';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_FOCUS: 
      return {
        ...state,
        focused: true,
      };        
    case INPUT_BLUR: 
      return {
        ...state,
        focused: false,
      };    
    case UPDATE_INPUT:
      return {
        ...state,
        value: action.value,
        changed: true,
      };
    case RESET_INPUT:
      return {
        value: action.value,
        changed: action.changed,
        focused: action.focused,
      };      
    default:
      return state;
  };
};

const addRequiredLabel = (txt, isRequired) => `${txt}${isRequired ? '*' : ''}`;

const Input = forwardRef((props, ref) => {
  const {
    name,
    errorFeedback,
    onValueUpdate,
    deleteButton,
    password,
    keyboardType,
    required,
    isValid,
    initialValue,
    leftIcon,
  } = props;

  const [secureTextEntry, setSecureTextEntry] = useState(password);
  const togglePwdVisibility = () => setSecureTextEntry(prevstate => !prevstate);

  const [inputState, dispatch] = useReducer(
    inputReducer,
    {
      value: initialValue || '',
      focused: false,
      changed: false,
    }
  );

  const onChangeText = value => dispatch({
    type: UPDATE_INPUT,
    value,
  });

  const onFocus = () => dispatch({ type: INPUT_FOCUS });
  const onBlur = () => dispatch({ type: INPUT_BLUR });
  const clearValue = () => dispatch({
    type: UPDATE_INPUT,
    value: '',
  });

  useEffect(
    () => {
      if (!inputState.focused && inputState.changed) {
        onValueUpdate(
          name,
          inputState.value,
        );
      }
    }, [name, inputState, onValueUpdate],
  );

  useEffect(
    () => {
      if (initialValue === '') {
        dispatch({
          type: RESET_INPUT,
          value: initialValue,
          focused: false,
          changed: false,
        });
      }
    }, [initialValue],
  );

  const label = props.label
    ? addRequiredLabel(props.label, required) 
    : null;

  const placeholder = props.placeholder
    ? addRequiredLabel(props.placeholder, required) 
    : null;

  let icon = null;

  if (deleteButton && inputState.value !== '') {
    icon = (
      <Button
        action={clearValue}
        style={styles.iconbtn}
      >
        <Ionicons
          name="close-circle-outline"
          size={22}
          color={Colors.font2}
        />
      </Button>
    );
  }

  if (password) {
    icon = (
      <Button
        action={togglePwdVisibility}
        style={styles.iconbtn}
      >
        <Ionicons
          name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
          size={22}
          color={Colors.font2}
        />
      </Button>
    );
  }

  const error = typeof isValid === 'boolean' && !isValid && !inputState.focused;

  return (
    <View style={styles.wrap}>
      {label && <Text fontSize={Typography.s} color={Colors.font2}>{label}</Text>}
      <View style={{
          ...styles.container,
          ...(error && styles.error),
        }}
      >
        {
          leftIcon
            && (
              <View style={styles.leftIcon}>
                {leftIcon}
              </View>
            )
        }
        <TextInput
          {...props}
          ref={ref}
          style={styles.input}
          value={inputState.value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}          
        />
        {icon}
      </View>
      {
        error
          && (
            <View style={styles.errorFeedback}>
              <Text
                fontSize={Typography.xs}
                color={Colors.secondary}
              >
                {errorFeedback || 'Please, insert a valid input value'}
              </Text>
            </View>
          )
      }
    </View>
  );
});

const styles = StyleSheet.create({
  wrap: {
    marginBottom: Spacings.m,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 41,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  error: {
    borderBottomColor: Colors.secondary,
  },    
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: Spacings.xs,
  },
  leftIcon: {
    width: 22,
  },  
  iconbtn: {
    width: 40,
    backgroundColor: Colors.white,
  },
  errorFeedback: {
    marginTop: Spacings.xs,
  },
});

export default Input;
