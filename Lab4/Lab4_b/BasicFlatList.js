import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View, Image, TouchableOpacity } from 'react-native';


// function itemFlat({item, index}){
//     return(
//         <View style={styles.itemContainer}>
//             <Text style={styles.item}>{item}</Text>
//         </View>
//     );
// };

export default function BasicFlatList({data,setData}){
    const deleteItem = it =>{
        const db = this.data.filter(item => item!=it);
        this.setData({db})
    }
    return(
        <View style={styles.container}>
            <FlatList data={data} keyExtractor={(item)=>item} renderItem={
                ({item, index})=>{
                    return(
                        <View style={styles.itemContainer}>
                            <Text style={{fontSize:18, width:220}}>{item}</Text>
                            <TouchableOpacity onPress={()=>{deleteItem(item)}}>
                                <Text style={styles.button}>Xóa</Text>
                            </TouchableOpacity>
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
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    },
    itemContainer:{
        flexDirection:'row',
        width:300,
        color:TouchableWithoutFeedback,
        padding:10,
        marginTop:10,
        borderBottomColor:'gray',
        borderBottomWidth:1
    },
    button:{
        backgroundColor:'pink',
        paddingBottom:5,
        paddingTop:5,
        paddingLeft:20,
        paddingRight:20,
    }
  });