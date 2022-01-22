import { NavigationProp } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { NavigationToolbar } from '../components/NavigationToolbar';
import { mainStyles } from '../constants/styles';


export interface TrainingScreenProps {
  navigation: NavigationProp<any, any>
}


export default function TrainingScreen(props: TrainingScreenProps) {
  const navigationToolbar = NavigationToolbar(props.navigation);
  return (
    <View style={mainStyles.fullPage}>
      <View style={mainStyles.mainContent}>
        <Text>Training screen page</Text>
      </View>
      {navigationToolbar}
    </View>
  );
}

