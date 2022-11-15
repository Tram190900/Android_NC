import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View , Image, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign, Octicons } from "@expo/vector-icons";
import iconCafe from '../assets/iconcafe.png'
import ReadMore from '@fawazahmed/react-native-read-more';
import { useSafeAreaFrame } from 'react-native-safe-area-context';


export default function Detail({navigation}){
    const route = useRoute();
    const [data, setData] = useState({});
    const {heigth, width} = Dimensions.get('window');
    const [selection, setSelection] = useState(1);

    useEffect(()=>{
        setData(route.params);
        console.log(data);
    },[])
    
    return(
        <View style={styles.container}>
            <View style={[styles.headerContainer]}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <AntDesign name='left' size={30}></AntDesign>
                </TouchableOpacity>
                <Text style={{fontSize:22, fontWeight:'bold'}}>Detail</Text>
                <TouchableOpacity>
                    <AntDesign name='hearto' size={27}></AntDesign>
                </TouchableOpacity>
            </View>

            <View style={styles.contentContainer}>
                <View style={{height:'37%'}}>
                    <Image source={{uri:data.imageProduct}} style={{height:'100%', width:'100%', borderRadius:40}}></Image>
                </View>
                <Text style={{marginTop:15, fontSize:22, fontWeight:'bold'}}>{data.CategoryId}</Text>
                <Text style={{color:'gray', fontWeight:'bold', fontSize:18}}>{data.with}</Text>
                <View style={styles.describe}>
                    <AntDesign name='star' color={'#AB8245'} size={20} style={{paddingRight:3}}></AntDesign>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>4.8</Text>
                    <View style={{flexDirection:'row', paddingLeft:200}}>
                        <TouchableOpacity style={{backgroundColor:'#D9D9D9', borderRadius:10, marginRight:15}}>
                            <Image source={iconCafe} style={{height:35, width:35}}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#D9D9D9', borderRadius:10}}>
                            <Image source={{uri:'https://static.thenounproject.com/png/80986-200.png'}} style={{height:35, width:35}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height:'22%'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', paddingTop:10, marginBottom:10}}>Describe</Text>
                    <ScrollView>
                        <ReadMore numberOfLines={3} style={{fontSize:18, fontWeight:'bold', color:'gray'}}>
                            {data.describe}
                        </ReadMore>
                    </ScrollView>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Size</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                        <TouchableOpacity style={[styles.buttonSize, selection===1?{backgroundColor:'#FFE4BC'}:null]} onPress={()=>setSelection(1)}>
                            <Text style={[styles.textSize, selection===1?{color:'#AB8245'}:null]}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonSize, selection===2?{backgroundColor:'#FFE4BC'}:null]} onPress={()=>setSelection(2)}>
                            <Text style={[styles.textSize, selection===2?{color:'#AB8245'}:null]}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonSize, selection===3?{backgroundColor:'#FFE4BC'}:null]} onPress={()=>setSelection(3)}>
                            <Text style={[styles.textSize, selection===3?{color:'#AB8245'}:null]}>L</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <View style={[styles.bottomContainer]}>
                <View>
                    <Text style={{fontSize:16, color:'gray'}}>Price</Text>
                    <Text style={{fontSize:22, color:'#AB8245', fontWeight:'bold'}}>$ {data.price}</Text>
                </View>
                <TouchableOpacity style={styles.buttonBuy}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Buy now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30
    },
    headerContainer:{
      marginTop:20,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:'6%'
    },
    contentContainer:{
        height:'80%',
        marginTop:10,
        height:'80%'
    },
    describe:{
        marginTop:10, 
        flexDirection:'row', 
        alignItems:'center', 
        borderBottomColor:'#D9D9D9', 
        borderBottomWidth:1.5, 
        paddingBottom:20,
    },
    buttonSize:{
        borderWidth:1,
        width:100,
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        borderColor:'gray',
        // backgroundColor:'#E3CCA9',
        // opacity:0.5,
        borderColor:'#AB8245',
        borderWidth:1.2
    },
    textSize:{
        fontSize:20,
        fontWeight:'500'
    },
    bottomContainer:{
        height:'10%',
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    buttonBuy:{
        height:55,
        width:230,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#AB8245',
        borderRadius:10,
    }
})