import React from 'react';

//React native components
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//Custom Components
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo'

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.wrapper}>
        <View>
          <View style={style.todoCount}>
            <Text style={style.title}>Todo List</Text>
            <Text style={style.count}>0</Text>
          </View>
          <TodoList />
        </View>
        <AddTodo />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },
  wrapper: {
    flex:1,
    justifyContent:'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom:8
  },
  todoCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#FFA502'
  },
  count: {
    fontSize: 32,
    fontWeight: '600',
    color: '#FFA502'
  }
})

export default App