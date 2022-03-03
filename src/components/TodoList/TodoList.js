import React from 'react'
import { FlatList} from 'react-native'
import Todo from '../Todo'
import styles from './TodoList.styles'

const TodoList = ({ todos }) => {
    const todosElement = todos.map(todo => (<Todo todo={todo}></Todo>))
    return (
        <FlatList style={styles.container} data={todosElement} renderItem={({item}) => (<Todo todo={item}></Todo>)}/>
    )
}

export default TodoList