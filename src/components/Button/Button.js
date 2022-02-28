import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './Button.styles'

const Button = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
    )
}

export default Button