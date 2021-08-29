import React from 'react';

import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';

import Colors from '@constants/colors';

const Card = ({
  onPress,
  justBorder,
  borderRadius,
  backgroundColor,
  style,
  children,
}) => {
  if (!children) {
    return null;
  }

  const nativeFeedBack = (
    Platform.OS === 'android'
    && Platform.Version >= 21
  );

  let TouchableComponent = nativeFeedBack
    ? TouchableNativeFeedback
    : TouchableOpacity;

  if (!onPress) {
    TouchableComponent = View;
  }

  const feedBackProps = nativeFeedBack
    ? {
      background: TouchableNativeFeedback.Ripple(Colors.white, true),
      useForeground: true,
    } : {
      activeOpacity: 0.5,
    };

  const cardStyle = {
    ...styles.card,
    ...(justBorder ? styles.border : styles.shadow),
    ...style,
    ...(typeof borderRadius !== 'undefined' && !Number.isNaN(borderRadius) && { borderRadius }),
    ...(backgroundColor && { backgroundColor })
  };

  const touchableStyle = {
    ...styles.touchableContainer,
    ...(typeof borderRadius !== 'undefined' && !Number.isNaN(borderRadius) && { borderRadius }),
  };

  return (
    <View style={cardStyle}>
      <View style={touchableStyle}>
        <TouchableComponent
          {...feedBackProps}
          onPress={onPress}
        >
          {children}
        </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    elevation: 10,
  },
  border: {
    borderWidth: 1,
    borderColor: Colors.border,
  },
  touchableContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default Card;
