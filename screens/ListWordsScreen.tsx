import { NavigationProp } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { NavigationToolbar } from '../components/NavigationToolbar';
import { mainStyles } from '../constants/styles';


export interface ListWordsScreenProps {
    navigation: NavigationProp<any, any>
}


export default function ListWordsScreen(props: ListWordsScreenProps) {
    const navigationToolbar = NavigationToolbar(props.navigation)
    return (
        <View style={mainStyles.fullPage}>
            <View style={mainStyles.mainContent}>
                <Text>ListWords</Text>
            </View>
            {navigationToolbar}
        </View>
    );
}

