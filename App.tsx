import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { config } from './constants/Configuration';
import { mainScreens, PageDescription } from './constants/mainPages';
import AddNewWordScreen from './screens/AddNewWordScreen';
import TrainingScreen from './screens/TrainingScreen';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const GlobalContext = React.createContext(config)


export default function App() {


  {/* https://reactnative.dev/docs/navigation */ }
  return (

    <NavigationContainer>
      <GlobalContext.Provider value={config}>
        <Stack.Navigator>
      { 
            mainScreens.map(
              (page: PageDescription)=>{
                return (
                  <Stack.Screen
                    name={page.name}
                    component={page.component}
                    options={{title: page.title}}
                    key={page.name}
                  />
                )
              }
            )
      }
      </Stack.Navigator>
      </GlobalContext.Provider>
    </NavigationContainer>
  );
}

// const screenFullStyle = {
//   {}
// }