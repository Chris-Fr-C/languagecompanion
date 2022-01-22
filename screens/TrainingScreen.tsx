import { NavigationProp } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';


export interface TrainingScreenProps{
 navigation: NavigationProp<any,any>
}


export default function TrainingScreen({ navigation }: TrainingScreenProps) {
  return (
    <View>
      <Text>Training screen page</Text>
      <Button title="Add new word" onPress={() => { return navigation.navigate("AddNewWord") }} />
    </View>
  );
}