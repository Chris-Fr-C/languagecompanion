import React from "react"
import AddNewWordScreen from "../screens/AddNewWordScreen"

export interface AppConfiguration {
    languageFrom: Languages;
    languageTo: Languages;

}

export enum Languages{
    FRENCH,
    ENGLISH,
    GERMAN,
}


export const config: AppConfiguration = {
    languageFrom: Languages.FRENCH,
    languageTo: Languages.GERMAN,
}

// Currently we have something hard coded but we might have a json config file in the local storage that can change these values
// for other languages
