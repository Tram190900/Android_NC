import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default function Welcome({navigation}){
    const {height, width} = Dimensions.get('window')
    return(
        <View style={styles.container}>
            <Image source={{uri:'https://static.kinhtedothi.vn/images/upload/2021/12/20/791d229f-f351-40cd-be4b-543137f9b33a.jpg'}}
                    style={{width:width, height:height}}></Image>
            <Text style={styles.textBackgourd}>Coffee so good, your taste bubs will love it</Text>
            <Text style={styles.textBackgourd2}>The best grain, the fines roast, the powerful flavor</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('HomeOrder')}>
                <Text style={styles.textButton}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textBackgourd:{
        position:'absolute',
        fontSize:45,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        width:'90%',
        bottom:180
    },
    textBackgourd2:{
        position:'absolute',
        bottom:120,
        fontSize:20,
        color:'gray',
        width:'90%',
        textAlign:'center'
    },
    buttonContainer:{
        position:'absolute',
        bottom:40,
        backgroundColor:'#AB8245',
        height:60,
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    textButton:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
})