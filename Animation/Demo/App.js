import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import next from '../Demo/assets/img/next.png'

const FadeInView=(props)=>{
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:3000
    }).start();
  },[fadeAnim])
  return(
    <Animated.View style={{...props.style,opacity:fadeAnim}}>
      {props.children}
    </Animated.View>
  )
}


export default function App() {
  var position = 10;

  const move = new Animated.Value(position);
  const moveRight =()=>{
    console.log(move);
    if(position===10){
      position = 350
      Animated.timing(move,{
        toValue:position,
        duration:2000,
      }).start();
    }
    else if(position===350){
      position = 10
      Animated.timing(move,{
        toValue:position,
        duration:2000,
      }).start();
    }
  }
  
  const moveLeft = ()=>{
    Animated.timing(move,{
      toValue:0,
      duration:2000
    })
  }

  const viewPosition =()=>{
    if(move.Value==350){
      moveLeft()
    }else if(move.Value==0){
      moveRight()
    }
  }

  return (
    <View style={styles.container}>
      <FadeInView style={{with:400, height:50, backgroundColor:'pink'}}>
        <Text style={{fontSize:18, padding:10, textAlign:'center'}}>
          Welcome to Animation React Native</Text>
      </FadeInView>
      <StatusBar style="auto" />
      <Animated.View style={{width:'100%', transform:[{translateX:move}]}}>
        <View style={{width:20, height:20, backgroundColor:'red'}}></View>
      </Animated.View>
      <TouchableOpacity style={{margin:20}}  onPress={moveRight}>
        <Text style={{backgroundColor:'pink', padding:10}}>Move Right</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveRight}>
        <Text style={{backgroundColor:'pink', padding:10}}>Move Left</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
