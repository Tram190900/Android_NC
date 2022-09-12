import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../Lab1_a/assets/img/circle.png';

export default function App() {
  return (
    <View  style={styles.container}>
      <LinearGradient
        colors={['#E5F4F5','#D1F4F6','#C7F4F6','#00CCF9','transparent']}
        style={styles.background}>
          <View>
            <Image source ={Logo} style={styles.Logo}></Image>
          </View>
          <View>
            <Text style={[styles.text, {fontSize:35}]}>GROW YOUR BUSINESS</Text>
            <Text style={[styles.text, {fontSize:18, marginTop:35}]}>We will help you to grow your business using online server</Text>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity>
              <Text style={styles.buttonBg}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonBg}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.text, {fontSize:20}]} >HOW WE WORK?</Text>
          </View>
          
      </LinearGradient>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    alignItems: 'center',
    backgroundColor:'#00CCF9',
    height:'100%'
  },
  background:{
    //position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%',
  },
  Logo:{
    margin:130,
    marginBottom:70,
  },
  text:{
    textAlign:'center',
    fontFamily:'Roboto',
    fontStyle:'normal',
    marginLeft:30,
    marginRight:30,
    fontWeight:'bold'
  },
  buttonView:{
    flex:0.5,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-evenly',
  },
  buttonBg:{
    backgroundColor:'#E3C000',
    width:95,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    padding:7,
  },
});
