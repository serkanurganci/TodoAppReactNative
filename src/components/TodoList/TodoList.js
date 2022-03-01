import React from 'react'
import { View } from 'react-native'
import Todo from '../Todo'
import styles from './TodoList.styles'

const TodoList = () => {
    return(
        <View style={styles.container}>
            <Todo todo="Todo 1"></Todo>
            <Todo todo="Todo 1" todoComplete></Todo>
        </View>
    )
}

export default TodoList