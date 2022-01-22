import { NavigationProp } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface AddNewWordScreenProps {
  navigation: NavigationProp<any, any>
}


export default function AddNewWordScreen({ navigation }: AddNewWordScreenProps) {
  return (
    <View>
      <Text>Add new word page</Text>
      <Button title="Training" onPress={() => { return navigation.navigate("Training") }} />
    </View>
  );
}
