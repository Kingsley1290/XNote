// import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { LogIn } from './framework/Screens/LogIn';
import { Intro } from './framework/Screens/Intro';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './framework/Components/StackNavigation';
// import React from 'react';

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
  );
}
