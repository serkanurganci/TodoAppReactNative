import React from 'react'
import { View, Text } from 'react-native'
import styles from './Todo.styles'

const Todo = ({todo}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{todo}</Text>
        </View>
    )
}

export default Todo