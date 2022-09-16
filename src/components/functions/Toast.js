import Toast from 'react-native-toast-message';


const showToast = (prop) => {

    Toast.show({
      type: 'success',
      text1: prop
    });}


export default showToast;