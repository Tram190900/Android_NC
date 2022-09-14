import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button} from '@react-native-material/core';
import Rectangle_1 from '../Lab1_c/assets/img/Rectangle1.png'

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient 
      colors={['#D1F4F6','#E5F4F5','#E5F4F5','#E5F4F5','transparent']}
      style={styles.background}>
        <View style={{flex:3, alignItems:'center', justifyContent:'center'}}>
          <Text style={styles.Logo}>CODE</Text>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={[styles.Text, {fontSize:28, paddingBottom:10}]}>VERIFICATION</Text>
          <Text style={[styles.Text, {fontSize:20}]}>Enter ontime password sent on ++849092605798</Text>
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <TextInput style={styles.Input} numberOfLines={1} maxLength={1}></TextInput>
          <TextInput style={styles.Input} numberOfLines={1} maxLength={1}></TextInput>
          <TextInput style={styles.Input} numberOfLines={1} maxLength={1}></TextInput>
          <TextInput style={styles.Input} numberOfLines={1} maxLength={1}></TextInput>
          <TextInput style={styles.Input} numberOfLines={1} maxLength={1}></TextInput>
          {/* <Image source={Rectangle_1}></Image>
          <Image source={Rectangle_1}></Image>
          <Image source={Rectangle_1}></Image>
          <Image source={Rectangle_1}></Image>
          <Image source={Rectangle_1}></Image> */}
        </View>
        <View style={{flex:1}}>
          <Button title='VERITY CODE' style={styles.button}></Button>
        </View>
      </LinearGradient>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#00CCF9',
    height:'100%',
  },
  background:{
    flex: 1,
    left:0,
    right:0,
    top:0,
    height:'100%',
  },
  Logo:{
    color:'black',
    fontSize:60,
    fontWeight:'bold',
  },
  Text:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
  },
  button:{
    backgroundColor:'#E3C000',
    fontSize:25,
    fontWeight:'bold',
    padding:10,
    textAlign:'center',
    marginLeft:30,
    marginRight:30,
  },
  Input:{
    borderWidth:2,
    fontSize:30,
    textAlign:'center',
    borderColor:'black',
    height:65,
    width:65,
  }
});
