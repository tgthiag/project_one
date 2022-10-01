import React from "react";
import {StyleSheet} from 'react-native';
import LoginScreen from "./src/components/screens/login"
import RegisterScreen from "./src/components/screens/registro/Register";
import DiscoverGames from "./src/components/screens/discoverGames/discoverG";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyParentComponent from "./src/components/screens/discoverGames/test";

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="teste">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Reg" component={RegisterScreen} options={{headerShown: false}}/>
        {/* <Stack.Screen name="DiscoverG" component={DiscoverGames} options={{headerShown: false}}/> */}
        <Stack.Screen name="teste" component={MyParentComponent} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  background:{
    flex: 1
  }
})