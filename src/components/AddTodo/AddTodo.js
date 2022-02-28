import React from 'react'
import {View} from 'react-native'

//Custom components
import Input from '../Input'
import Button from '../Button'

//Styles
import styles from './AddTodo.styles'

const AddTodo = () => {
    return (
        <View style={styles.container}>
            <Input/>
            <Button/>
        </View>
    )
}

export default AddTodo