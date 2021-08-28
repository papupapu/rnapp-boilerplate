import React from 'react';

import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

const SafeArea = ({ children }) => (
  <SafeAreaView style={styles.safeAndroidArea}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAndroidArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default SafeArea;
