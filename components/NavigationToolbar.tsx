import { NavigationProp } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { mainScreens, PageDescription } from '../constants/mainPages';
import { mainStyles } from '../constants/styles';

/**
 * Generates a nabigation bar with all possible pages, including current one 
 * @param navigation navigation object
 * @returns 
 */
export function NavigationToolbar(navigation: NavigationProp<any, any>): JSX.Element {
    return (
        <View style={mainStyles.rowContainer}>{
            mainScreens.map(
                (page: PageDescription) => {
                    return (
                        <Button title={page.title} onPress={() => navigation.navigate(page.name)} key={page.title} />
                    )
                }
            )
        }
        </View>
    )


}

