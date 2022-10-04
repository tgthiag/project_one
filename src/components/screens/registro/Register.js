import React, {useState} from 'react';
import {View,Text,Image, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./style"
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import showToast from "../../functions/Toast";
import auth from "../../../config/auth/auth";

const staticImage2 = require("../../../../assets/thegamers.png");
//IN DEVELOPMENT
export default function RegisterScreen({ navigation }){
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [verifySenha, setVerifySenha] = useState("")
  const authentication = auth;

  function validate(){
    if(usuario === "" || password === "" || verifySenha === ""){
      showToast("preencha os campos")
    }else{
      console.log("td preenchido")
      if(password === verifySenha){
        signUp(authentication,usuario,password)
      }
    }
  }
  function signUp(auth,email,senha){
    createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    showToast("Sucesso!")
    const user = userCredential.user;
    setTimeout(() => {
      navigation.navigate('Login')
  }, 1500);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    showToast(errorCode)
  });
  }

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.7)','rgba(255,128,0,0.1)','rgba(255,128,0,0.2)',"#1b1d25", '#1b1d25',"#1b1d25","#1b1d25"]}
                backgroundColor={"#FFFFFF"}
                style={styles.gradient}
            />
            <StatusBar/>
            <SafeAreaView style={styles.topContainer}>
                <Image source={staticImage2} style={styles.imageLogo2}/>
            </SafeAreaView>
            <SafeAreaView style={{flex:1, alignItems:"center", justifyContent:"center", width: "100%", height:"100%"}}>
              <Text style={styles.Title}>CADASTRO</Text>
              <Text style={styles.subtitle}>Nome de usuário:</Text>
              <TextInput style={styles.input} ></TextInput>
              <Text style={styles.subtitle}>Email:</Text>
              <TextInput style={styles.input} 
                placeholderTextColor="#cdcdcd" 
                value={usuario}
                onChangeText={setUsuario}></TextInput>
              <Text style={styles.subtitle}>Senha:</Text>
              <TextInput style={styles.input}
                keyboardType={"password"}
                placeholderTextColor="#cdcdcd" 
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}/>
              <Text style={styles.subtitle}>Repita a senha:</Text>
              <TextInput style={styles.input}  
                keyboardType={"password"}
                placeholderTextColor="#cdcdcd" 
                value={verifySenha}
                onChangeText={setVerifySenha}
                secureTextEntry={true}/>
              <TouchableOpacity 
                  style={styles.linearGradient} 
                  onPress={() => validate()}
              >
                  <LinearGradient 
                      colors={['#ffb66c','rgba(255,128,0,0.4)', 'rgba(255,128,0,0.4)','rgba(255,128,0,0.6)','#a85400']} 
                      style={styles.linearGradient} 
                  > 
                      <Text 
                          style={styles.bt_text}>
                          Cadastrar
                      </Text>
                  </LinearGradient>
              </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}