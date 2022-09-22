import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import blue from '../Lab3_c_Screen2/assets/img/vsmart_live_xanh.png';
import black from '../Lab3_c_Screen2/assets/img/vsmart_black_star.png';
import red from '../Lab3_c_Screen2/assets/img/vs_red.png';
import gray from '../Lab3_c_Screen2/assets/img/vs_bac.png';
import { useState } from 'react';

export default function App() {
  const [img, setImg] = useState(blue);
  const [nameColor, setNameColor] = useState('Blue');
  function getColor(color, name){
    setImg(color);
    setNameColor(name)
  }
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
              <TouchableOpacity onPress={() => getColor(gray,'Gray')}>
                <View style={[styles.btnColor, {backgroundColor:'#C5F1FB'}]}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => getColor(red,'Red')}>
                <View style={[styles.btnColor, {backgroundColor:'#F30D0D'}]}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => getColor(black,'Black')}>
                <View style={[styles.btnColor, {backgroundColor:'#000000'}]}></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => getColor(blue,'Blue')}>
                <View style={[styles.btnColor, {backgroundColor:'#234896'}]}></View>
              </TouchableOpacity>
          </View>
      </View>
      <View style={styles.btnFinish}>
        <TouchableOpacity>
          <Text style={[styles.btnXong,{alignItems:'center'}]}>Xong</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
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
