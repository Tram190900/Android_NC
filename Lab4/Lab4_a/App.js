import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BasicFlatList from './components/BasicFlatList';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      </View>
      <BasicFlatList></BasicFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:40,
    paddingBottom:40,
  },
});
