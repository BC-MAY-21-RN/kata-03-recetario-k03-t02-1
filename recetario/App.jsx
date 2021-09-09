/* eslint-disable import/no-unresolved */
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recetario from './components/views';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Recetario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
