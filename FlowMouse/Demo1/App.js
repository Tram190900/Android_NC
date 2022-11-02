import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Pressable } from 'react-native';
import cat from './assets/cat.png'
import mouse from './assets/mouse.png'

export default function App() {
  
  const [location, setLocation] = useState({
    x: null,
    y:null,
    Left: new Animated.Value(10),
    Top: new Animated.Value(10),
  })

  const [locationMouse, setLocationMouse]
  = useState({
    xM: null,
    yM: null,
    leftM: new Animated.Value(300),
    topM: new Animated.Value(700),
  })

  function onPressMouse(evt){
    var xM = Math.floor(Math.random() * 300) + 10 ;
    var yM = Math.floor(Math.random() * 700) + 10 ;
    setLocationMouse({
      xM: xM,
      yM: yM,
      leftM:xM,
      topM:yM
    });
  }

  function onPress(evt){
    var x = evt.nativeEvent.locationX;
    console.log(x);
    var y = evt.nativeEvent.locationY;
    console.log(y);
    setLocation({
      // x:x,
      // y:y,
      Left:x-50,
      Top:y-100
    })
    
  }

  function onMove(evt){
    var x = evt.nativeEvent.locationX;
    //console.log(x);
    var y = evt.nativeEvent.locationY;
    setLocation({
      x:x,
      y:y,
      Left:x,
      Top:y
    })
    console.log("Move");
  }

  function onRelease(){
    console.log("Release");
  }
  const {Top, Left} = location;
  const {topM, leftM} = locationMouse;
  return (
    // <View style={styles.container}
    //       onStartShouldSetResponder={()=>true}
    //       onMoveShouldSetResponder={()=>true}
    //       onResponderGrant={onPress}
    //       onResponderMove={onMove}
    //       onResponderRelease={onRelease}>
    //   <Animated.Image source={cat} style={{height:100, width:100,backgroundColor:'pink', marginLeft: Left, marginTop:Top}}>

    //   </Animated.Image>
      
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}
          onStartShouldSetResponder={()=>true}
          onMoveShouldSetResponder={()=>true}
          onResponderEnd={onPress}>
      <Pressable onPress={onPressMouse} style={{backgroundColor:'pink', height:70, width:70}}>
        <Animated.Image source={mouse} style={{height:70, width:70, marginLeft:leftM, marginTop:topM}}>

        </Animated.Image>
      </Pressable>

        <Animated.Image source={cat} style={{height:100, width:100,backgroundColor:'pink', marginLeft: Left, marginTop:Top}}>

        </Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
