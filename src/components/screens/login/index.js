import React, {useState} from "react";
import {Text,View,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import styles from "./style"
import Toast from 'react-native-toast-message';
import showToast from "../../functions/Toast";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// VARÍAVEL DO LOGOTIPO
const staticImage = require("../../../../assets/thegamers.png");
const staticImage2 = require("../../../..//assets/thegamers.png");

export default function LoginScreen({ navigation }) {
    const [titulo, setTitulo]= useState("THEGAMERS")
    var [usuario, setUser] = useState("")
    var [senha, setSenha]= useState("")
    

    function autentication(){
        showToast("Aguarde...")
        // fazer autenticação aqui
    }

    // VERIFICA SE OS CAMPOS DE INPUT ESTÃO PREENCHIDOS
    function notBlank(){
        if(!(usuario.notBlank || usuario) || !(senha.notBlank || senha)){
            return showToast("Preencha os campos")
        }
        autentication()
    }

    return(
        <SafeAreaView  
            style={styles.container}>
            {/* BACKGROUND GRADIENT */}
            <LinearGradient
                colors={['rgba(0,0,0,0.7)','rgba(200,104,181,0.1)','rgba(200,104,181,0.2)',"#1b1d25", '#1b1d25',"#1b1d25","#1b1d25"]}
                style={styles.gradient}
            />
            <StatusBar/>
            <SafeAreaView style={styles.topContainer}>
                <Image source={staticImage2} style={styles.imageLogo2}/>
            </SafeAreaView>
            
            <SafeAreaView style={{ width: "100%", height: "100%", alignItems:"center", margin: "30%"}}>
                {/* TÍTULO */}
                <Text 
                    style={styles.Title}>
                    {titulo}
                </Text>
                {/* INPUT DE USUÁRIO */}
                <TextInput 
                    style={styles.input} 
                    placeholder={"Usuário"} 
                    placeholderTextColor="#cdcdcd" 
                    value={usuario}
                    onChangeText={setUser}
                />
                {/* INPUT SENHA */}
                <TextInput 
                    style={styles.input} 
                    keyboardType={"password"}
                    placeholder={"Senha"} 
                    placeholderTextColor="#cdcdcd" 
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={setSenha}
                />
                {/* BOTÃO DE LOGIN */}
                <TouchableOpacity 
                    style={styles.linearGradient} 
                    onPress={notBlank}
                >
                    <LinearGradient 
                        colors={['#fbe1fa','rgba(200,104,181,0.5)', 'rgba(200,104,181,0.4)','rgba(200,104,181,0.9)' ]} 
                        style={styles.linearGradient} 
                    > 
                        <Text 
                            style={styles.bt_text}>
                            Fazer login
                        </Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* LOGIN COM FACEBOOK */}
            <TouchableOpacity style={styles.linearGradient} >
                <LinearGradient 
                    colors={['#192f6a','#0080ff','#0080ff','#0080ff' ]} 
                    style={styles.linearGradient} 
                >
                    <Text 
                        style={styles.bt_text}>
                        Entrar com Facebook
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

            {/* TEXTO DE CADASTRO */}
            <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
                <Text 
                    style={styles.cadastro}>
                    Cadastre-se aqui!
                </Text>
            </TouchableOpacity>
            {/* TOAST CALLER */}
            <Toast 
                position={'bottom'}
                bottomOffset={90}
            />
         </SafeAreaView>
        </SafeAreaView>
    )
}

