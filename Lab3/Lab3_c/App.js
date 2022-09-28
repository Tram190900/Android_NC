import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';

import Screen1 from './Screen/Screen1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Screen2 from './Screen/Screen2';

const stack = createNativeStackNavigator();
export default function App(){
    return(
        <NavigationContainer>
          <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name='Home' component={Screen1}></stack.Screen>
            <stack.Screen name='Option' component={Screen2}></stack.Screen>
          </stack.Navigator>
        </NavigationContainer>
    );
    
}
