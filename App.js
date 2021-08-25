import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import store from '@store';

import DesignSystem from '@screens/DesignSystem';

enableScreens();

const fetchFonts = () => Font.loadAsync({
  'OS-Light': require('./assets/fonts/OpenSans-Light.ttf'),
  'OS-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  'OS-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
});

export default function App() {
  const [appReady, setAppready] = useState(false);
  if (!appReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAppready(true)}
        onError={(e) => console.log(e)}
      />
    );
  }  
  return (
    <Provider store={store}>
      <DesignSystem />
    </Provider>
  );
};
