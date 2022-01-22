/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from '../App';
import AddNewWordScreen from '../screens/AddNewWordScreen';
import TrainingScreen from '../screens/TrainingScreen';
import { RootStackParamList } from '../types';




/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

function RootNavigator() {
  return (
    <SafeAreaProvider>
      <App/>
    </SafeAreaProvider>
  );
}
