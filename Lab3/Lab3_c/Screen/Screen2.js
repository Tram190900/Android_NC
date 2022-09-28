import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

// import blue from '../assets/img/vsmart_live_xanh.png';
// import black from '../assets/img/vsmart_black_star.png';
// import red from '../assets/img/vs_red.png';
// import gray from '../assets/img/vs_bac.png';
import { useState } from 'react';

export default function Screen2({navigation}) {
  var blue = require('../assets/img/vsmart_live_xanh.png');
  var black = require('../assets/img/vsmart_black_star.png');
  var red = require('../assets/img/vs_red.png');
  var gray = require('../assets/img/vs_bac.png');
  var imgSource = {blue, black, red, gray};  

  const [img, setImg] = useState(imgSource.blue);
  const [nameColor, setNameColor] = useState('Blue');
  const [link, setLink] = useState("");
//   function getColor(color, name){
//     setImg(color);
//     setNameColor(name);
//     //setLink(color);
//   }
  return (
    <View style={styles.container}>
      <View style={styles.img}>
          <Image source={img} style={styles.logo}></Image>
          <View style={styles.content}>
            <Text style={[styles.txtContent, {alignContent:'center'}]}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.txtContent}>Màu: </Text>
              <Text style={[styles.txtContent,{fontWeight:'bold'}]}>{nameColor}</Text>
            </View>
            <Text style={[styles.txtContent,{fontWeight:'bold'}]}>1.750.00 </Text>
          </View>
      </View>
      <View style={styles.color}>
          <Text style={[styles.txtContent, {marginTop:10, paddingLeft:10}]}>Chọn một màu bên dưới:</Text>
          <View style={styles.listColor}> 
              <TouchableOpacity onPress={() => onPress4()}>
                <View style={[styles.btnColor, {backgroundColor:'#C5F1FB'}]}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress3()}>
                <View style={[styles.btnColor, {backgroundColor:'#F30D0D'}]}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress2()}>
                <View style={[styles.btnColor, {backgroundColor:'#000000'}]}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress1()}>
                <View style={[styles.btnColor, {backgroundColor:'#234896'}]}></View>
              </TouchableOpacity>
          </View>
      </View>
      <View style={styles.btnFinish}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home",{message:link})}>
          <Text style={[styles.btnXong,{alignItems:'center'}]}>Xong</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );

  function onPress1(){
    setImg(imgSource.blue);
    setNameColor("Xanh");
    setLink(imgSource.blue)
  }
  function onPress2(){
    setImg(imgSource.black);
    setNameColor("Đen");
    setLink(imgSource.black)
  }
  function onPress3(){
    setImg(imgSource.red);
    setNameColor("Đỏ");
    setLink(imgSource.red)
  }
  function onPress4(){
    setImg(imgSource.gray);
    setNameColor("Bạc");
    setLink(imgSource.gray)
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    flex:1,
    margin:40,
    flexDirection:'row',
  },
  color:{
    flex:4,
    backgroundColor:'#C4C4C4',
    width:'100%'
  },
  btnFinish:{
    flex:1,
    width:'100%',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    backgroundColor:'#C4C4C4',
  },
  content:{
    flexDirection:'column',
    padding:10,
  },
  logo:{
    width:110,
    height:140,
  },
  txtContent:{
    fontSize:18,
    paddingBottom:5,
  },
  listColor:{
    justifyContent:'center',
    alignItems:'center'
  },
  btnColor:{
    width:90,
    height:90,
    marginTop:8,
  },
  btnXong:{
    backgroundColor:'#1952E294',
    fontSize:25,
    color:'white',
    borderRadius:10,
    padding:10,
  }
});
