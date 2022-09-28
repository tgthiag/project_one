import {StyleSheet, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-x-carousel';
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1b1d25',
        alignItems:"center",
    },
    topContainer: {
        height: "8%",
        backgroundColor: '#242730',
        justifyContent:"center",
        width: "100%",
        top:0
      },
    statusBar:{
        backgroundColor: "#16171e",
        translucent: false
    },
    textoSimples:{
        color:"#9a9a9a",
        justifyContent: "center",
        textAlign: "left",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14
    },
    textoConsoles:{
        color:"#9a9a9a",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        textAlign: "center"
    },
    textoFollowers:{
        color:"#9a9a9a",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        fontWeight: "bold"
    },
    imageLogo: {
        resizeMode: "center",
        width: 70,
        height: 70,
        shadowRadius: 30,
        start: 10, position: "absolute"
    },
    imageIcon: {
        resizeMode:"center",
        width: 40,
        height: 40,
        right: 10,
        position: "absolute"
      },
    imageCover: {
        resizeMode:"stretch",
        width: "30%",
        height: "47%",
        borderRadius: 10
      },
    backgroundLogo: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
    shadowLogo:{
        resizeMode: "cover", 
        width: "100%", 
        height:"100%",
        alignItems: "center", 
        justifyContent:"center"
      },
    title: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight:"bold",
        padding: 14,
        alignItems: "center",
        textAlign: "center"
    },
    subTitle: {
        fontSize: 18,
        color: "#9a9a9a",
        fontWeight:"bold",
        marginBottom: 10
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
    },
    cardWrapper: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    card: {
        width: width * 0.9,
        height: width * 0.3,
    },
    scrollView: {
        height: "35%",
        width: "90%",
        marginHorizontal: 20,
        bottom: 10, position: "absolute"
    },
    modal: {  
        justifyContent: 'center',  
        alignItems: 'center',   
        backgroundColor : "#00BCD4",   
        height: 300 ,  
        width: '80%',  
        borderRadius:10,  
        borderWidth: 1,  
        borderColor: '#fff',    
        marginTop: 80,  
        marginLeft: 40,    
         },
    closeSearch:{
        width: "50%",
        borderRadius:30,  
        borderWidth: 1, 
        backgroundColor : "#000000",   
        color: "#FFFFFF" 
    }

})
export default styles;