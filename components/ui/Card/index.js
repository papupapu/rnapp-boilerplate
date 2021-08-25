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

  return (
    <View style={{
      ...styles.card,
      ...(justBorder ? styles.border : styles.shadow),
      ...style,
      ...(!isNaN(borderRadius) && { borderRadius: borderRadius }),
      ...(backgroundColor && { backgroundColor: backgroundColor })
    }}>
      <View style={{
        ...styles.touchableContainer,
        ...(!isNaN(borderRadius) && { borderRadius: borderRadius }),
      }}>
        <TouchableComponent
          {...feedBackProps}
          onPress={onPress}
          style={styles.touchable}
        >
          {children}
        </TouchableComponent>
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  shadow: {
    shadowColor: 'black',
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
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  touchable: {
    flex: 1,
  },
});

export default Card;
