import AddNewWordScreen from "../screens/AddNewWordScreen";
import ListWordsScreen from "../screens/ListWordsScreen";
import TrainingScreen from "../screens/TrainingScreen";

export enum Pages {
    ADD_NEW_WORD,
    TRAINING,
    LIST_WORDS,
}

export interface PageDescription {
    name: string; // equals to the 'url'
    title: string;
    component: any; // Not a good type, read doc to find the proper one
    page: Pages
}

export const mainScreens: Array<PageDescription> = [
    { name: "AddNewWord", title: "Add a new word", component: AddNewWordScreen, page:Pages.ADD_NEW_WORD},
    { name: "Training", title: "Training", component: TrainingScreen, page: Pages.TRAINING},
    { name: "ListWords", title: "List words", component: ListWordsScreen, page: Pages.LIST_WORDS},
]