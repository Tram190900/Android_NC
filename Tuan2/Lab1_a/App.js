import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../Lab1_a/assets/img/circle.png';

export default function App() {
  return (
    <View  style={styles.container}>
      <LinearGradient
        colors={['#C7F4F6','#D1F4F6','#E5F4F5','#00CCF9','transparent']}
        style={styles.background}>
          <View>
            <Image source ={Logo} style={styles.Logo}></Image>
          </View>
          <View>
            <Text style={[styles.text, {fontSize:35}]}>GROW YOUR BUSINESS</Text>
            <Text style={[styles.text, {fontSize:18, marginTop:30}]}>We will help you to grow your business using online server</Text>
          </View>
          <View>
            <Button title='Login' style={styles.button}></Button>
            <Button title='Sign up' style={styles.button}></Button>
          </View>
      </LinearGradient>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:'#00CCF9',
    height:'100%'
  },
  background:{
    //position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'90%',
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
  
});
