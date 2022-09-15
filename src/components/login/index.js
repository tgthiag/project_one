import React, {useState} from "react";
import {Text,View,StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import styles from "./style"


const staticImage = require("../../../assets/thegamers.png");

export default function LoginScreen() {
    const [titulo, setTitulo]= useState("THEGAMERS")
    const [usuario, setUser] = useState(null)
    const [senha, setSenha]= useState(null)

    return(
        <View style={styles.background}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', '#2f4779','#394d97',"#93a2c7"]}
                style={styles.gradient}
            />
            <ImageBackground 
                source={staticImage} 
                style={styles.imageLogo}
            />
            <Text 
                style={styles.Title}>
                {titulo}
            </Text>
            <TextInput 
                style={styles.input} 
                placeholder={"Usuário"} 
                value={usuario}
            />
            <TextInput 
                style={styles.input} 
                keyboardType={"password"}
                placeholder={"Senha"} 
                value={senha}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.linearGradient} >
                <LinearGradient 
                    colors={['#a85400', '#b73c00','#d26900', '#a6a600']} 
                    style={styles.linearGradient} 
                    // onPress={Em implementação}
                    > 
                    <Text 
                        style={styles.bt_text}>
                        Fazer login
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
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
            <Text 
                style={styles.cadastro}>
                Cadastre-se aqui!
            </Text>
    </View>    
    )
}

