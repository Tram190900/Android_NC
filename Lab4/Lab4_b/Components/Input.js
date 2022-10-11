import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity, FlatList} from 'react-native';

export default function Input({data,setData}){
    const [text, setText] = useState("");

    const handlerChange = (Text)=>{
        setText(Text);
    }
    const handerButton = ()=>{
        setData([...data,text]);
    }

    return(
        <View style={styles.container}>
            <TextInput placeholder='Công việc' style={styles.txtInput} value={text} onChangeText={handlerChange}></TextInput>
            <View>
                <TouchableOpacity onPress={handerButton}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:50,
    },
    txtInput:{
        borderColor:'black',
        width:300,
        height:40,
        borderWidth:1,
        fontSize:18
    },
    button:{
        fontSize:18,
        fontWeight:'bold',
        backgroundColor:'red',
        padding:10,
        marginTop:10,
        alignContent:'center'
    }
})