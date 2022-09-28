import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BasicFlatList from './components/BasicFlatList';

export default function App() {
  return (
    <View style={styles.container}>
      <BasicFlatList></BasicFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
