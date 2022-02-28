import React from 'react'
import { StyleSheet, TextInput, View } from "react-native";
import styles from './Input.styles'

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter Todo"/>
        </View>
    )
}

export default Input