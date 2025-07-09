import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StackNavigator from './StackNavigator';
import { StatusBar } from 'react-native';

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator();
  const navigationRef = createNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,

        }}>
        <RootStack.Screen name="Stack" component={StackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
