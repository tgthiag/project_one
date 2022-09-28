import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradient:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    },
    Title: {
      fontSize: 48,
      color: "#FFFFFF",
      marginBottom: 50,
      fontWeight:"bold"
    
    },
    imageLogo: {
      resizeMode: "cover",
      width: 180,
      height: 180,
      alignItems: "center",
    },
    input:{
      width:"70%",
      borderRadius: 50,
      backgroundColor:"#f6f6f6",
      height: 40,
      margin: 12,
      fontSize: 18,
      paddingLeft: 10,
      textAlign: "center"
  },
  
  bt_text: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight:"bold"
  },
  cadastro: {
    fontSize: 16,
    color: "#000000",
    fontWeight:"bold",
    bottom: -20,
    textDecorationLine: 'underline'
  },
  linearGradient: {
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    alignItems: "center",
    justifyContent: "center",
    width:"82%",
    paddingTop: 14,
    paddingBottom: 14,

  },
  })
  export default styles;