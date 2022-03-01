import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    btn:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        paddingTop:12,
        paddingBottom:12
    },
    btnDefault:{
        backgroundColor:'#808080',
    },
    btnActive:{
        backgroundColor:'#FFA502'
    },
    btnText:{
        fontSize:16,
        fontWeight:'600',
        color:'#ffffff'
    }
})

export default style