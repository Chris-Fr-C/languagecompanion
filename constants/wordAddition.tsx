import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { mainStyles } from "./styles";

interface WordDefinition {
    word: string,
    translation: string | null,
    definition: string | null,
}

function OriginWordInput(
    props: {
        currentWord: string,
        onTextChange: (text: string) => void,
        onTextValidate: () => void,
        onTextClean: () => void,
    },
): React.ReactElement {

    return (
        <View>
            <TextInput
                style={mainStyles.textInput}
                onChangeText={props.onTextChange}
                value={props.currentWord}
            />
            <View style={mainStyles.rowContainer}>
                <Button title="Translate" onPress={props.onTextValidate} />
                <Button title="Reset" color={DefaultTheme.colors.primary} onPress={props.onTextClean} />
            </View>
        </View>
    )
}

function OriginWordShow(props: { word: WordDefinition | null }): React.ReactElement {


    return (
        <Text>Presenting data : Word = {props.word === null ? "" : props.word.word}</Text>
    )
}

interface WordAdditionProps { }
interface WordAdditionState {
    currentWritenWord: string,
    validatedWord: WordDefinition | null;
}

export default class WordAddition extends React.PureComponent<WordAdditionProps, WordAdditionState>{
    state: WordAdditionState = {
        currentWritenWord: "",
        validatedWord: { word: "", translation: null, definition: null },
    }

    /**
     * Callback when the "translate" button is pressed
     */
    private callbackTranslateWord(): void {
        let newWord: WordDefinition = {
            word: this.state.currentWritenWord,
            definition: null,
            translation: null,
        }
        this.setState(
            {
                ...this.state,
                validatedWord: newWord,
            }
        )
    }

    private callbackOnWordChange(inputWord: string) {
        console.log("🚀 ~ file: wordAddition.tsx ~ line 64 ~ WordAddition ~ callbackOnWordChange ~ inputWord", inputWord)
        this.setState({
            ...this.state,
            currentWritenWord: inputWord,
        })
    }

    private callbackCleanWordInput() {
        this.setState({
            ...this.state,
            currentWritenWord: "",
        })
    }

    render(): React.ReactNode {
        return (
            <View>
                <OriginWordInput
                    currentWord={this.state.currentWritenWord}
                    onTextChange={(text) => { this.callbackOnWordChange(text) }}
                    onTextValidate={() => this.callbackTranslateWord()}
                    onTextClean={() => this.callbackCleanWordInput()}
                />
                <OriginWordShow word={this.state.validatedWord} />
            </View>
        )
    }
}

