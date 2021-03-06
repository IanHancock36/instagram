import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Landing from './Components/Auth/Landing'
const Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
     <Stack.Navigatior initialRouteName = "Landing"> </Stack.Navigatior>
    <Stack.Screen name= "Landing" component ={Landing} options = {{headerShown: false}}></Stack.Screen>
    </NavigationContainer>
  )
}