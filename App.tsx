import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import { LogBox } from 'react-native';

const App = () => {
LogBox.ignoreAllLogs()
  return (
      <AppNavigator />
  );
};

export default App;
