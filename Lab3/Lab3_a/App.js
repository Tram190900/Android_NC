import { Button, IconButton } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

import book from '../Lab3_a/assets/img/book.png';
import add from '../Lab3_a/assets/img/btnadd.png';
import minus from '../Lab3_a/assets/img/btnminus.png';
import yl from '../Lab3_a/assets/img/yellow_block.svg';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  const [count, setCount] = useState();
  const [tienTam, setTienTam] = useState();
  const [tongTien, setTongTien] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infor}>
        <View style={styles.img}>
          <View>
            <Image source={book} style={{width:115, height:149}}></Image>
          </View>
          <View style={{paddingLeft:20}}>
            <Text style={styles.txtInfor}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.txtInfor}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{color:'red', fontSize:22, fontWeight:'bold'}}>141.800</Text>
            <Text>141.800</Text>
            <View style={styles.btnNumber}>
              {/* <Image source={minus}></Image> */}
              <IconButton icon={props => <Icon name='plus' {...props} style={{backgroundColor:'#C4C4C4'}}></Icon>}></IconButton>
              <Text style={{paddingLeft:5, paddingRight:5, fontWeight:'bold', fontSize:16}}>1</Text>
              <IconButton icon={props => <Icon name='minus' {...props} style={{backgroundColor:'#C4C4C4'}}></Icon>}></IconButton>
              <Text style={{color:'#134FEC', marginLeft:'15%',}}>Mua sau</Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection:'row', marginTop:15}}>
          <Text style={styles.txtInfor}>Mã giảm giá đã lưu</Text>
          <Text style={{marginLeft:'25%', color:'blue'}}>Xem thêm tại đây</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Button title='Mã giảm giá' leading={props => <Image source={yl} {...props}></Image>}></Button>
          <Button title='Áp dụng' style={{backgroundColor:'#0A5EB7', marginLeft:'25%'}}></Button>
        </View>
       
      </View>
      <View style={styles.tamTinh}>
        <View style={styles.quaTang}>
          <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{color:'blue'}}>Nhập tại đây?</Text>
        </View>
        <View style={styles.tien}>
          <Text style={[styles.txtInfor, {fontSize:20}]}>Tạm tính</Text>
          <Text style={[styles.txtInfor, {fontSize:20, marginLeft:'50%', color:'red'}]}>141.800</Text>
        </View>
      </View>
      <View style = {styles.tongTien}>
        <View style={{flexDirection:'row', margin:22}}>
          <Text style={[styles.txtInfor, {fontSize:20}]}>Thành tiền</Text>
          <Text style={[styles.txtInfor, {fontSize:20, marginLeft:'50%', color:'red'}]}>141.800</Text>
        </View>
        <View>
          <Button title='TIẾN HÀNH ĐẶT HÀNG' style={styles.btnDatHang}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  infor:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    width:'100%',
    paddingTop:30,
  },
  tamTinh:{
    flex:1,
  },
  quaTang:{
    flexDirection:'row',
    backgroundColor:'white',
    marginTop:15,
    padding:22,
  },
  tien:{
    flexDirection:'row',
    backgroundColor:'white',
    marginTop:15,
    padding:20,
  },
  btnNumber:{
    flexDirection:'row',
    alignItems:'center'
  },
  txtInfor:{
    fontWeight:'bold',
    paddingBottom:10,
    fontSize:15,
  },
  img:{
    flexDirection:'row',
  },
  tongTien:{
    flex:0.5,
    flexDirection:'column',
    backgroundColor:'white',
    width:'100%',
  },
  btnDatHang:{
    backgroundColor:'red',
    marginLeft:22,
    marginRight:22,
  }
});
