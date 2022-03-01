import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './Button.styles'

const Button = ({btnActive = false}) => {
    return (
        <TouchableOpacity style={[styles.btn, btnActive ? styles.btnActive : styles.btnDefault]}>
            <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
    )
}

export default Button