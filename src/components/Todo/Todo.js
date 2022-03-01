import React from 'react'
import { View, Text } from 'react-native'
import styles from './Todo.styles'

const Todo = ({todo, todoComplete=false}) => {
    return (
        <View style={[styles.container,todoComplete ? styles.todoComplete : styles.todoDefault]}>
            <Text style={[styles.title, todoComplete ? styles.titleComplete : styles.titleDefault]}>{todo}</Text>
        </View>
    )
}

export default Todo