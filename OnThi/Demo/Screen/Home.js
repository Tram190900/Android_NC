import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const { height, width } = Dimensions.get("window");
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState(1);

  const getData = async (category)=>{
    fetch('https://63512fa53e9fa1244e57aeb0.mockapi.io/store/Category/'+category+'/Products')
    .then((res)=>res.json())
    .then((resJson)=>setData(resJson));
  }

  const showDetail = (item)=>{
    navigation.navigate('Detail', {describe: item.describe,
                                  CategoryId: item.CategoryId,
                                  imageProduct: item.imageProduct,
                                  price:item.price,
                                  with: item.with})
  }

  useEffect(()=>{
    //getData('Cappuccino')
    //buttonHandler('Cappuccino')
    fetch('https://63512fa53e9fa1244e57aeb0.mockapi.io/store/Category/Cappuccino/Products')
    .then((res)=>res.json())
    .then((resJson)=>setData(resJson));
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer} height={height / 3.2}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "gray", fontWeight: "bold" }}>Location</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ color: "white", fontWeight: "bold", marginRight: 10 }}
              >
                Đà Lạt
              </Text>
              <TouchableOpacity>
                <AntDesign name="down" color={"white"}></AntDesign>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4T3wuBUGu6pNTxNJPF0TNARtkjqTFKf1z5ehMIGNvYFlOPviXpxe4cTQj9jCXt0dtyM&usqp=CAU" }}
            style={{ height: 50, width: 50, borderRadius: 10 }}
          ></Image>
        </View>
        <View style={styles.textInput}>
          <Octicons name="search" size={30} color={"gray"}></Octicons>
          <TextInput
            placeholder={"Search"} 
            style={{ fontSize: 20, width: "90%", paddingLeft: 5 , color:'white'}}
          ></TextInput>
        </View>
        <View style={styles.imageHeader}>
          <Image
            source={{
              uri: "https://sonvietcoffee.com/UserFile/editor/images/ca_phe_nguyen_chat.jpg",
            }}
            style={{ height: 150, width: "100%", borderRadius: 15 }}
          ></Image>
        </View>
      </View>
      <View style={{height:height/5.5}}>
        <ScrollView
          contentContainerStyle={styles.categoryContainer}
          horizontal={true}
        >
          <TouchableOpacity style={[styles.buttonContainer, selection===1?{backgroundColor:'#AB8245'}:null]} onPress={()=>{getData('Cappuccino'), setSelection(1)}}>
            <Text style={[selection===1?{color:'white', fontWeight:'bold'}:null]}>Cappuccino</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, selection===2?{backgroundColor:'#AB8245'}:null]} onPress={()=>{getData('Machiato'), setSelection(2)}}>
            <Text style={[selection===2?{color:'white', fontWeight:'bold'}:null]}>Machiato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, selection===3?{backgroundColor:'#AB8245'}:null]} onPress={()=>{getData('Latte'), setSelection(3)}}>
            <Text style={[selection===3?{color:'white', fontWeight:'bold'}:null]}>Latte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonContainer, selection===4?{backgroundColor:'#AB8245'}:null]} onPress={()=>{getData('Americano'), setSelection(4)}}>
            <Text style={[selection===4?{color:'white', fontWeight:'bold'}:null]}>Americano</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{height:height/2}}>
        <FlatList data={data} keyExtractor={(item)=>item.id} renderItem={({item, index})=>{
            return(
                <View style={styles.listContainer}>
                    <TouchableOpacity onPress={()=>showDetail(item)}>
                      <View style={styles.itemContainer}>
                          <View style={styles.itemImage}>
                            <Image source={{uri:item.imageProduct}} style={{height:'100%', width:'100%', borderRadius:20}}></Image>
                            <AntDesign name="star" style={styles.iconStar} size={18}></AntDesign>
                          </View>
                          <Text style={{fontWeight:'bold', fontSize:20, margin:5}}>{item.CategoryId}</Text>
                          <Text style={{fontWeight:'bold', fontSize:18,color:'gray', paddingLeft:5, marginBottom:5}}>{item.with}</Text>
                          <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                              <Text style={{fontSize:25,color:'#091336', fontWeight:'bold', paddingLeft:5}}>${item.price}</Text>
                              <TouchableOpacity style={styles.buttonPlus}>
                                <AntDesign name="plus" size={20} color="white" />
                              </TouchableOpacity>
                          </View>
                      </View>
                    </TouchableOpacity>
                </View>
            )
        }} numColumns={2}></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "black",
    padding: 30,
  },
  categoryContainer: {
    marginTop: 90,
    flexDirection: "row",
  },
  textInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#555555",
    borderRadius: 15,
    marginTop: 20,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    opacity:0.5
  },
  imageHeader: {
    marginTop: 30,
  },
  buttonContainer: {
    width: 100,
    height: 40,
    backgroundColor: "#EAE5E5",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  listContainer:{
    width:'45%',
    margin:10
  },
  itemContainer:{
    backgroundColor:'white',
    height:280,
    borderRadius:20
  },
  itemImage:{
    height:'55%', 
    width:'100%',
    borderRadius:20
  },
  buttonPlus:{
    width:35,
    height:35,
    backgroundColor:'#AB8245', 
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
  },
  iconStar:{
    color:'yellow',
    position:'absolute',
    top:5,
    left:5
  }
});
