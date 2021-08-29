/* eslint-disable react-native/no-unused-styles */
import React from 'react';

import {
  Text as RNText,
  StyleSheet,
} from 'react-native';

import Colors from '@constants/colors';
import Typography from '@constants/typography';

const Text = ({
  style,
  fontSize,
  color,
  numberOfLines,
  numberOfRows,
  light,
  bold,
  children,
  align,
}) => {
  let weight = 'regular';
  if (light) {
    weight = 'light';
  }
  if (bold) {
    weight = 'bold';
  }

  const txtsize = fontSize
    ? { fontSize }
    : { fontSize: Typography.m };

  const txtcolor = color
    ? { color }
    : { color: Colors.font1 };

  const lineHeight = txtsize.fontSize < 18
    ? txtsize.fontSize + 8
    : txtsize.fontSize + 9;

  return (
    <RNText
      style={{
        ...styles[weight],
        ...txtsize,
        lineHeight,
        ...txtcolor,
        ...(align ? { textAlign: align } : {}),
        ...style,
      }}
      numberOfRows={numberOfRows}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  light: {
    fontFamily: 'OS-Light',
  },
  regular: {
    fontFamily: 'OS-Regular',
  },
  bold: {
    fontFamily: 'OS-Bold',
  },
});

export default Text;
