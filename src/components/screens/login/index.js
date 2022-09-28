import React, {useState} from "react";
import {Text,View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import styles from "./style"
import Toast from 'react-native-toast-message';
import showToast from "../../functions/Toast";

// VARÍAVEL DO LOGOTIPO
const staticImage = require("../../../../assets/thegamers.png");

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
        <View style={styles.background}>
            {/* BACKGROUND GRADIENT */}
            <LinearGradient
                colors={['rgba(0,0,0,0.8)',"#02052f", '#2a2a2a',"#6e6e6e","#7d7d7d"]}
                style={styles.gradient}
            />
            {/* LOGOTIPO */}
            <ImageBackground 
                source={staticImage} 
                style={styles.imageLogo}
            />
            {/* TÍTULO */}
            <Text 
                style={styles.Title}>
                {titulo}
            </Text>
            {/* INPUT DE USUÁRIO */}
            <TextInput 
                style={styles.input} 
                placeholder={"Usuário"} 
                value={usuario}
                onChangeText={setUser}
            />
            {/* INPUT SENHA */}
            <TextInput 
                style={styles.input} 
                keyboardType={"password"}
                placeholder={"Senha"} 
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
                    colors={['#a85400', '#b73c00','#d26900', '#a6a600']} 
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
                    colors={['#192f6a','#3b5998','#4c669f' ]} 
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
        </View>    
    )
}
