import { NavigationProp } from '@react-navigation/native';
import { AppConfig, View } from 'react-native';
import { NavigationToolbar } from '../components/NavigationToolbar';
import { mainStyles } from '../constants/styles';
import WordAddition from '../constants/wordAddition';

export interface AddNewWordScreenProps {
  navigation: NavigationProp<any, any>;
  cfg: AppConfig;
}





export default function AddNewWordScreen(props: AddNewWordScreenProps) {
  const navigationToolbar = NavigationToolbar(props.navigation)
  return (
    <View style={mainStyles.fullPage}>
      <View style={mainStyles.mainContent}>
        <WordAddition />
      </View>
      {navigationToolbar}
    </View>
  );
}

