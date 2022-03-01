import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
      padding:8,
      borderRadius:8,
      marginBottom:8
  },
  todoDefault:{
    backgroundColor:'#7DA453',
    
  },
  todoComplete:{
    backgroundColor:"rgba(255,255,255,0.15)",
    color:"#e2e2e2"
  },
  title:{
    fontSize:20,
    fontWeight:'600',
    
  },
  titleDefault:{
    color:'#ffffff'
  },
  titleComplete:{
    color:'rgba(255,255,255,0.4)',
    textDecorationLine:'line-through'
  }
})

export default styles