import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Navigations from './src/navigations';


const App = () => {
  return (
    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
};

export default App;