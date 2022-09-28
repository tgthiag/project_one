import React from 'react';
import {View, StyleSheet,Text, Button, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'


export default function RegisterScreen({ navigation }){
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)',"#6f3700","#e37200", '#987867','#676767',"#3c332d"]}
                style={styles.gradient}
            />
            <Text style={styles.Title}>CADASTRO</Text>
            <Text style={styles.subtitle}>Nome de usuário:</Text>
            <TextInput style={styles.input} ></TextInput>
            <Text style={styles.subtitle}>Email:</Text>
            <TextInput style={styles.input} ></TextInput>
            <Text style={styles.subtitle}>Senha:</Text>
            <TextInput style={styles.input}  secureTextEntry={true}></TextInput>
            <Text style={styles.subtitle}>Repita a senha:</Text>
            <TextInput style={styles.input}  secureTextEntry={true}></TextInput>
            <TouchableOpacity 
                style={styles.linearGradient} 
                onPress={() => navigation.navigate('Login')}
            >
                <LinearGradient 
                    colors={['#a85400', '#b73c00','#d26900', '#a6a600']} 
                    style={styles.linearGradient} 
                > 
                    <Text 
                        style={styles.bt_text}>
                        Cadastrar
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
      },
    input:{
      width:"70%",
      borderRadius: 50,
      backgroundColor:"#a8a8a8",
      height: 40,
      margin: 12,
      fontSize: 18,
      paddingLeft: 10,
      textAlign: "center"
  },
  Title: {
    fontSize: 48,
    color: "#FFFFFF",
    marginBottom: 50,
    fontWeight:"bold"
  },
  bt_text: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight:"bold"
  },
  subtitle:{
    fontSize: 20,
    fontWeight:"bold",
    color: "#FFFFFF",
  },
  linearGradient: {
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    alignItems: "center",
    justifyContent: "center",
    width:"82%",
    marginTop:10,
    paddingTop: 14,
    paddingBottom: 14,

  },
  
})