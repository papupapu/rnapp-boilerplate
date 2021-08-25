import React from 'react';

import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';

import Colors from '@constants/colors';
import Spacings from '@constants/spacings';

import Text from '../Text';

const Button = ({
  action,
  text,
  disabled,
  cancel,
  style,
  textStyle,
  children,
}) => {
  if (!text && !children) {
    return null;
  }

  const nativeFeedBack = (
    Platform.OS === 'android'
    && Platform.Version >= 21
    && !disabled
  );

  const TouchableComponent = nativeFeedBack
    ? TouchableNativeFeedback
    : TouchableOpacity;

  let activeOpacity = 0.8;
  if (disabled) {
    activeOpacity = 1;
  }
  if (cancel) {
    activeOpacity = 0.5;
  }

  const feedBackProps = nativeFeedBack
    ? {
      background: TouchableNativeFeedback.Ripple(cancel ? Colors.border : Colors.white, true),
      useForeground: true,
    } : {
      activeOpacity,
    };

  const disabledStyle = disabled && styles.disabled;
  const cancelStyle = cancel && styles.touchable__ctn__cancel;
  const cancelTextStyle = cancel && styles.cancel_text;
  const textIsBold = !cancel;

  const touchableContentStyle = {
    ...styles.touchable,
    ...styles.touchable__bg,
    ...cancelStyle,
    ...style,                
  };

  return (
    <View style={{ ...styles.button, ...disabledStyle }}>
      <View style={styles.touchable__ctn}>
      <TouchableComponent
        {...feedBackProps}
        style={styles.touchable}
        onPress={() => { !disabled && action() }}
      >
        <View style={touchableContentStyle}>
        {
          text
            ? (              
              <Text
                bold={textIsBold}
                style={{
                  ...styles.text,
                  ...cancelTextStyle,
                  ...textStyle,
                }}
              >
                {text}
              </Text>
            ) : children
        }
        </View>
      </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
  },
  disabled: {
    opacity: 0.7,
  },
  touchable__ctn: {
    flex: 1,
    overflow: 'hidden',
  },
  touchable__ctn__cancel: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.font2,
  },  
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: Spacings.s,
  },
  touchable__bg: {
    backgroundColor: Colors.primary,
  },  
  text: {
    color: Colors.white,
  },
  cancel_text: {
    color: Colors.font1,
  }
});

export default Button;
