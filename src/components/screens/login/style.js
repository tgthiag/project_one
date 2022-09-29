import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#1b1d25',
    alignItems:"center",
  },
  container2: {
  backgroundColor: '#1b1d25',
  alignItems:"center",
  justifyContent: "center"
  },
  topContainer: {
    height: "8%",
    backgroundColor: '#242730',
    justifyContent:"center",
    width: "100%",
  },
    gradient:{
      position: 'absolute',
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    },
    Title: {
      fontSize: 48,
      color: "#FFFFFF",
      marginBottom: 50,
      fontWeight:"bold",
      textShadowColor: 'rgba(0, 0, 0, 0.6)',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 5
    
    },
    imageLogo: {
      resizeMode: "cover",
      width: 180,
      height: 180,
      alignItems: "center",
    },
    imageLogo2: {
      resizeMode: "center",
      width: 70,
      height: 70,
      shadowRadius: 30,
      start: 10, position: "absolute"
    },
    input:{
      width:"70%",
      borderRadius: 50,
      backgroundColor:"#242730",
      height: 40,
      margin: 12,
      color: "#ffffff",
      fontSize: 18,
      paddingLeft: 10,
      textAlign: "center",
      borderLeftWidth: 0.5,
      borderTopWidth: 0.4
  },
  
  bt_text: {
    fontSize: 16,
    fontWeight:"bold",
  },
  cadastro: {
    fontSize: 16,
    color: "#cdcdcd",
    fontWeight:"bold",
    bottom: -20,
    textDecorationLine: 'underline'
  },
  linearGradient: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "center",
    width:"72%",
    paddingTop: 14,
    paddingBottom: 14,
  },
  })
  export default styles;