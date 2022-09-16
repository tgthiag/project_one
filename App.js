import React from "react";
import {Text,View,StyleSheet, ImageBackground, TextInput} from 'react-native';
import LoginScreen from "./src/components/login/"

export default function App(){
  return (
    <View style={styles.background}>
      <LoginScreen/>
     </View>
  )
}

const styles = StyleSheet.create({
  background:{
    flex: 1
  }
})