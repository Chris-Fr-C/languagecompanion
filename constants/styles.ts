import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native"
import { StyleSheet } from "react-native"

// let currentTheme: Theme = DarkTheme;
export let currentTheme: Theme = DefaultTheme;

export const mainStyles = StyleSheet.create(
  {
    //   Used for the global page
    fullPage: {
      flex: 1,
      alignSelf:"stretch",
      backgroundColor: currentTheme.colors.background,
    },

    //   For main component display
    mainContent: {
      flex: 1,
      marginTop: "0.5em",
      marginLeft: "1em",
      marginRight: "1em",
      backgroundColor: currentTheme.colors.background,
    
    },

    // For aligned objects
    container: {
      backgroundColor: currentTheme.colors.background,
    },

    rowContainer: {
      flexDirection: 'row',
      justifyContent: "space-between",
      alignContent: "center",
      paddingTop: "1em",
      paddingLeft: "1em",
      paddingBottom: "1em",
      paddingRight: "1em",
      border: "50px",
    },
    textInput: {
      backgroundColor: currentTheme.colors.card,
      borderColor: currentTheme.colors.border,
      borderWidth: "2px",
    }
  },


)
