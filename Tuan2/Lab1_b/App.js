import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, TextInput } from '@react-native-material/core';
import Logo from '../Lab1_b/assets/img/lock.png';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
      
      <LinearGradient 
        colors={['white','transparent']}
        style={styles.background}>
          <View style={styles.Logo}>
            <Image source={Logo}></Image>
          </View>
          <View style={styles.textView}>
            <Text style={[styles.text, {fontSize:35}]}>
              FORGET PASSWORD</Text>
            <Text style={[styles.text, {fontSize:18, marginTop:8}]}>Provide your account’s email for which you want to reset your password</Text>
          </View>
          <View style={{flex:2, justifyContent:'center'}}>
            <TextInput style={styles.textInput} 
                        placeholder='Email' 
                        variant="outlined"
                        leading={props=><Icon name='email' {...props}></Icon>}>
            </TextInput>
          </View>
          <View style={{flex:2}}>
            <Button style={styles.buttonBg} title='NEXT'></Button>
          </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#BDF6C6",
    height:'100%',
  },
  background:{
    flex:1,
    height:'100%',
    padding:10
  },
  Logo:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',
  },
  textView:{
    flex: 1.5,
    //justifyContent:'center',
  },
  text:{
    textAlign:'center',
    fontWeight:'bold',
  },
  textInput:{
    backgroundColor:'#C4C4C4',
    fontSize:20,
    marginLeft:30,
    marginRight:30,
  },
  buttonBg:{
    backgroundColor:'#E3C000',
    textAlign:'center',
    padding:7,
    marginLeft:30,
    marginRight:30,
  }
});
