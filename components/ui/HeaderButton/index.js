/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Platform } from 'react-native';

import { HeaderButton } from 'react-navigation-header-buttons';

import { Ionicons } from '@expo/vector-icons';

import Colors from '@constants/colors';

const MyHeaderButton = (props) => {
  const color = Platform.OS === 'android'
    ? Colors.white
    : Colors.primary;
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={color}
    />
  );
};

export default MyHeaderButton;
