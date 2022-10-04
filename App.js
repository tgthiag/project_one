import React from "react";
import LoginScreen from "./src/components/screens/login"
import RegisterScreen from "./src/components/screens/registro/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyParentComponent from "./src/components/screens/discoverGames";
import {User} from 'firebase/auth';
import Toast from 'react-native-toast-message';
    
const Stack = createNativeStackNavigator();
const user = User
const loginCheck = !user > 0 ? "teste" : "Login"

export default function App(){
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName={loginCheck}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Reg" component={RegisterScreen} options={{headerShown: false}}/>
        <Stack.Screen name="discoverGames" component={MyParentComponent} options={{headerShown: false}}/>
      </Stack.Navigator>
      <Toast 
                position={'bottom'}
                bottomOffset={90}
            />
    </NavigationContainer>


  )
}