import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native';
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
                                <View source={{uri:item.photo}}></View>
                            </View>
                            <View>
                                <Text style={styles.item}>{item.name}</Text>
                                <Text>{item.email}</Text>
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
      marginTop: 60,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'pink',
    },
    listItem:{
      color:TouchableWithoutFeedback,
      padding: 10
    },
    itemContainer:{
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'white',
        padding:10,
         width:300,
        marginTop:3,
    },
    item:{
        fontSize:20,
    }
  });