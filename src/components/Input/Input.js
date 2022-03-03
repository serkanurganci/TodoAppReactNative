import React,{useState} from 'react'
import { TextInput, View } from "react-native";
import styles from './Input.styles'

const Input = ({setTextInput,inputValue}) => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter Todo..." onChangeText={setTextInput} value={inputValue} placeholderTextColor={'#e2e2e2'}/>
        </View>
    )
}

export default Input