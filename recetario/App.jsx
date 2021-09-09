/* eslint-disable import/no-unresolved */
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recetario from './components/views';
import RecipeDetails from './components/views/detailFood';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recetario" component={Recetario} options={{ header: () => null }} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="RecipeDetail" component={RecipeDetails} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
