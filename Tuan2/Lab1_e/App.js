	import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import{TextInput, Button} from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from 'react';

export default function App() {
  const [sex, setSex] = useState('Male')
  function check(event){
    setSex(event)
  }
  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <Text style={{fontSize:33, fontWeight:'bold'}}>REGISTER</Text>
      </View>
      <View style={styles.ip}>
        <TextInput style={styles.txtInput} placeholder='Name'></TextInput>
      </View>
      <View style={styles.ip}>
        <TextInput style={styles.txtInput} placeholder='Phone'></TextInput>
      </View>
      <View style={styles.ip}>
        <TextInput style={styles.txtInput} placeholder='Email' ></TextInput>
      </View>
      <View style={styles.ip}>
        <TextInput style={styles.txtInput} placeholder='Password' keyboardType='password'
        trailing={props => <Icon name='eye' {...props}></Icon>}>
        </TextInput>
      </View>
      <View style={styles.ip}>
        <TextInput style={styles.txtInput} placeholder='Birthday'></TextInput>
      </View>
      <View style={styles.rdButton}>
        <RadioButton value='male' status={sex === 'male' ? 'checked' : 'unchecked' } onPress={() => check("male")}></RadioButton>
        <Text style={{fontSize:20}} value='Male'>Male</Text>
        <RadioButton value='female' status={sex === 'female' ? 'checked' : 'unchecked'} onPress={() => check("female")}></RadioButton>
        <Text style={{fontSize:20}}>Female</Text>
        
      </View>
      <View style={{flex:1, justifyContent:'center'}}>
        <Button title='REGISTER' style={styles.Button}></Button>
      </View>
      <View style={styles.ip}>
        <Text style={{paddingBottom:'10%'}}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31AA5230',
  },
  View1:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
  },
  txtInput:{
    width:320,
  },
  ip:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  rdButton:{
    flex:0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  Button:{
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#E53935',
  }
});
