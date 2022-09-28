import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';

//import xanh from '../assets/img/vsmart_live_xanh.png';

export default function Screen1({navigation}){
    const route = useRoute();

    var blue = require('../assets/img/vsmart_live_xanh.png');
    const [link, setLink] = useState(blue);

    useEffect(()=>{
        if (route.params != null)
      setLink(route.params.message)
    })

    return(
        <View style={styles.container}>
        <View style={styles.img}>
          <View>
            <Image source={link} style={[styles.logo]}></Image>
          </View>
        </View>
  
        <View style={styles.infor}>
          <Text style={{fontSize:17}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={styles.comment}>
              <Icon name='star' size={25}></Icon>
              <Icon name='star' size={25}></Icon>
              <Icon name='star' size={25}></Icon>
              <Icon name='star' size={25}></Icon>
              <Icon name='star' size={25}></Icon>
              <Text style={{fontSize:17, marginLeft:55}}>(Xem 828 đánh giá)</Text>
          </View>
          <Text style={styles.price}>1.790.000</Text>
          <View style={styles.sale}>
            <Text style={{fontSize:15, color:'red', fontWeight:'bold'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Icon name='message-question' size={24} style={{marginLeft:10}}></Icon>
          </View>
          <View>
            <TouchableOpacity style={styles.btnMau} onPress={()=>navigation.navigate('Option')}>
              <Text style={{fontSize:17}}>4 MÀU-CHỌN MÀU</Text>
              <Icon name='skip-next' size={24}></Icon>
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.button}>
            <TouchableOpacity style={styles.btnMua}>
              <Text style={{fontSize:22, color:'white', fontWeight:'bold'}}>Chọn mua</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column'
    },
    img:{
      flex:3,
      justifyContent:'center',
      alignItems:'center',
    },
    infor:{
      flex:2,
      alignItems:'center',
      width:'100%',
    },
    button:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%'
    },
    logo:{
      height:350,
      width:300
    },
  
    comment:{
      marginTop:12,
      flexDirection:'row',
      alignItems:'baseline'
    },
    price:{
      marginRight:220,
      fontSize:22,
      fontWeight:'bold',
      marginTop:12
    },
    sale:{
      flexDirection:'row',
      marginTop:12,
      marginRight:93
    },
    btnMau:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderColor:'black',
      borderWidth:1,
      borderRadius:5,
      padding:10,
      marginTop:30,
      width:315,
    },
    btnMua:{
      backgroundColor:'red',
      borderRadius:5,
      width:315,
      padding:10,
      alignItems:'center',
    }
  });