import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput,Icon, TouchableOpacity, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../Lab1_b/assets/img/lock.png';
import mail from '../Lab1_b/assets/img/mail.png'

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
            <Text style={[styles.text, {fontSize:18}]}>Provide your account’s email for which you want to reset your password</Text>
          </View>
          <View style={{flex:0.3, justifyContent:'center'}}>
            <TextInput style={styles.textInput} placeholder='Email'>
            </TextInput>
          </View>
          <View style={{flex:0.4}}>
            <TouchableOpacity>
              <Text style={styles.buttonBg}>NEXT</Text>
            </TouchableOpacity>
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
    height:'100%',
    padding:10
  },
  Logo:{
    flex:0.8,
    justifyContent:'center',
    alignItems:'center',
  },
  textView:{
    flex: 0.2,
    justifyContent:'center',
  },
  text:{
    textAlign:'center',
    fontWeight:'bold',
  },
  textInput:{
    backgroundColor:'#C4C4C4',
    fontSize:20,
    paddingLeft:10,
    marginRight:30,
    marginLeft:30,
    padding:10,
  },
  buttonBg:{
    backgroundColor:'#E3C000',
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    padding:7,
    marginLeft:30,
    marginRight:30,
  }
});
