import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View, Image, TouchableOpacity } from 'react-native';
import flatListData from '../flatListData';

// function itemFlat({item, index}){
//     return(
//         <View style={styles.itemContainer}>
//             <Text style={styles.item}>{item}</Text>
//         </View>
//     );
// };

export default function BasicFlatList(){
    
    return(
        <View style={styles.container}>
            <FlatList data={flatListData} renderItem={
                ({item, index})=>{
                    return(
                        <View style={styles.itemContainer}>
                            <View>
                                <Image style={{height:150, width:100}} source={{uri:item.photo}}></Image>
                            </View>
                            <View style={{width:230}}>
                                <Text style={styles.item}>{item.name}</Text>
                                <Text>{item.email}</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.button}>Buy</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }
            }>
                
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:'#E5E5E5',
      flex:1,
    },
    itemContainer:{
        flexDirection:'row',
        borderColor:'black',
        borderBottomWidth:1,
        backgroundColor:'white',
        padding:10,
        marginTop:3,
        alignItems:'center',
    },
    item:{
        fontSize:20,
    },
    button:{
        backgroundColor:'red',
        padding:10,
    }
  });