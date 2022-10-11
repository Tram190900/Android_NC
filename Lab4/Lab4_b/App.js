import { StatusBar } from 'expo-status-bar';
import { Component, useState } from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity, FlatList, ListViewBase} from 'react-native';
import Input from '../Lab4_b/Components/Input';
import BasicFlatList from './BasicFlatList';


export default function App() {
  const [data, setData] = useState([]);
  
  return (
    <View style={styles.container}>
      <Input data={data} setData={setData}></Input>
      <BasicFlatList data={data}></BasicFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:80
  },
  
});
