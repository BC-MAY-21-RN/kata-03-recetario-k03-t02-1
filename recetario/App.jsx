/* eslint-disable import/no-unresolved */
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipe from './components/views';
import RecipeDetail from './components/views/recipeDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recipe">
        <Stack.Screen name="Recipe" component={Recipe} options={{ header: () => null }} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
