import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import AddNewWordScreen from './screens/AddNewWordScreen';
import TrainingScreen from './screens/TrainingScreen';


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {

  {/* https://reactnative.dev/docs/navigation */ }
  return (

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="AddNewWord"
        component={AddNewWordScreen}
        options={{ title: "AddNewWord" }}
      />
      <Stack.Screen
        name="Training"
        component={TrainingScreen}
        options={{ title: "Training" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
   );
}

// export function App2() {
// 
//   return (
//       {/* NavigationContainer) */}
// 
//       {/* https://reactnative.dev/docs/navigation */}
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="AddNewWord"
//             component={AddNewWordScreen}
//             options={{ title: "AddNewWord" }}
//           />
//           <Stack.Screen
//             name="Training"
//             component={TrainingScreen}
//             option={{ title: "Training" }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// }


// <Stack.Navigator
// 
// >
//   <Stack.Screen
//     name="AddNewWords"
//     component={AddNewWordScreen}
//   />
//   <Stack.Screen
//     name="Training"
//     component={TrainingScreen}
//   />
//   <Text>MY TEXT</Text>
//   <Text>MY TEXT</Text>
//   {/* <Navigation colorScheme={colorScheme} /> */}
//   {/* TODO: Is status bar useful ? */}
// </Stack.Navigator>
// <StatusBar />
