import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: '#1b1d25',
    },
    gradient:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
      },
      input:{
        width:"65%",
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
  Title: {
    fontSize: 48,
    color: "#FFFFFF",
    marginBottom: 50,
    fontWeight:"bold",
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5
  
  },
  topContainer: {
    height: "8%",
    backgroundColor: '#242730',
    justifyContent:"center",
    width: "100%",
  },
  imageLogo2: {
    resizeMode: "center",
    width: 70,
    height: 70,
    shadowRadius: 30,
    start: 10, position: "absolute"
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
export default styles;