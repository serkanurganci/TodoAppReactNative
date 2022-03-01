import React from 'react'
import { TextInput, View } from "react-native";
import styles from './Input.styles'

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter Todo..." placeholderTextColor={'#e2e2e2'}/>
        </View>
    )
}

export default Input