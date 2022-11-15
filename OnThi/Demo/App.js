import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Detail from "./Screen/Detail";
import Home from "./Screen/Home";
import Order from "./Screen/Order";
import Welcome from "./Screen/Welcome";

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const HomeOrder = () => {
  return (
    <tab.Navigator initialRouteName="Home" screenOptions={({route})=>({
      tabBarIcon:({focused, color, size})=>{
        let iconName;
        let backgroundColor;
        if(route.name==='Home'){
          iconName=focused?'home':'home-outline';
          backgroundColor=focused?'#AB8245':null
        }
        else if(route.name==='Cart'){
          iconName=focused?'cart':'cart-outline'
          backgroundColor=focused?'#AB8245':null
        }
        return <Ionicons name={iconName} size={25} color={backgroundColor} />;
      },
      headerShown:false,
      title:'',
      //tabBarActiveTintColor: 'tomato',
      //tabBarInactiveTintColor: 'gray',
    })}>
      <tab.Screen name="Home" component={Home}></tab.Screen>
      <tab.Screen name="Cart" component={Order} screenOptions={{toolbar:false}}></tab.Screen>
    </tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Welcome" component={Welcome}></stack.Screen>
        <stack.Screen name="Detail" component={Detail}></stack.Screen>
        <stack.Screen name="HomeOrder" component={HomeOrder}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
