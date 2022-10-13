import React, { useState } from "react";
import { Text, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./style";
import Toast from "react-native-toast-message";
import showToast from "../../functions/Toast";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import auth from "../../../config/auth/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMAGE
const staticImage2 = require("../../../..//assets/thegamers.png");

export default function LoginScreen({ navigation }) {
  const [titulo, setTitulo] = useState("THEGAMERS");
  const [usuario, setUser] = useState("");
  const [senha, setSenha] = useState("");

  //SIGN IN FUNCTION
  const autentication = auth;
  function signIn(auth, email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        showToast("Bem vindo!");
        setTimeout(() => {
          navigation.navigate("discoverGames");
        }, 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        var toastError =
          errorCode === "auth/invalid-email"
            ? "Usuário ou senha inválidos"
            : errorCode;
        showToast(toastError);
      });
  }

  // CHECK IF INPUTS ARE BLANK, IF NOT, START SIGN IN FUNCTION
  function notBlank() {
    if (!(usuario.notBlank || usuario) || !(senha.notBlank || senha)) {
      return showToast("Preencha os campos");
    } else {
      signIn(autentication, usuario, senha);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* BACKGROUND GRADIENT */}
      <LinearGradient
        colors={[
          "rgba(0,0,0,0.7)",
          "rgba(200,104,181,0.1)",
          "rgba(200,104,181,0.2)",
          "#1b1d25",
          "#1b1d25",
          "#1b1d25",
          "#1b1d25",
        ]}
        style={styles.gradient}
      />
      <StatusBar />
      <SafeAreaView style={styles.topContainer}>
        <Image source={staticImage2} style={styles.imageLogo2} />
      </SafeAreaView>

      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          margin: "30%",
        }}
      >
        {/* TÍTULO */}
        <Text style={styles.Title}>{titulo}</Text>
        {/* INPUT DE USUÁRIO */}
        <TextInput
          style={styles.input}
          placeholder={"Email"}
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
        <TouchableOpacity style={styles.linearGradient} onPress={notBlank}>
          <LinearGradient
            colors={[
              "#fbe1fa",
              "rgba(200,104,181,0.5)",
              "rgba(200,104,181,0.4)",
              "rgba(200,104,181,0.9)",
            ]}
            style={styles.linearGradient}
          >
            <Text style={styles.bt_text}>Fazer login</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* LOGIN COM FACEBOOK */}
        <TouchableOpacity style={styles.linearGradient}>
          <LinearGradient
            colors={["#192f6a", "#0080ff", "#0080ff", "#0080ff"]}
            style={styles.linearGradient}
          >
            <Text style={styles.bt_text}>Entrar com Facebook</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* TEXTO DE CADASTRO */}
        <TouchableOpacity onPress={() => navigation.navigate("Reg")}>
          <Text style={styles.cadastro}>Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}
