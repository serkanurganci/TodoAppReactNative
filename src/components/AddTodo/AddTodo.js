import React from 'react'
import {View} from 'react-native'

//Custom components
import Input from '../Input'
import Button from '../Button'

//Styles
import styles from './AddTodo.styles'

const AddTodo = ({setTextInput,handleAddTodoButton,inputValue}) => {

  
    return (
        <View style={styles.container}>
            <Input inputValue={inputValue} setTextInput={setTextInput}/>
            <Button handleAddTodoButton={handleAddTodoButton}/>
        </View>
    )
}

export default AddTodo