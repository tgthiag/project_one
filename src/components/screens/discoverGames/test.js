import React, { Component, useEffect }  from "react";
import {View, Text, Image, Button, ScrollView, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import getApi from "../../functions/api";
import Toast from 'react-native-toast-message';
import showToast from "../../functions/Toast";
import Carousel, {Pagination} from 'react-native-x-carousel';
import Modal from "react-native-modal";
import consoless from "../../functions/platforms";
import styles from "./style";

const staticImage = require("../../../..//assets/thegamers.png");
const shadowImg = require("../../../..//assets/shadowBackground.png");
const searchIcon = require("../../../..//assets/search.png");

export default class MyParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dados: [],
        buttonPressed: "",
        gameName: null,
        gameAbout: null,
        gameImages: [],
        gameCover: null,
        gamePlatform: [],
        gameFollows: null,
        gameBackground: null,
        isModalVisible: false,
        searchQuery: ""
    }
  }
    //ON SEARCH
  search(string){
    getApi(string,0, 10).then(v => {
      this.setState({ dados: v },() => {
        this.populate()
      });
  });
  }
    //LOADING DATA AND IMAGES
  populate(){
    try {
        var imgs = []
        var platf = []
        for (var key in this.state.dados[0].screenshots) {
            imgs.push(this.state.dados[0].screenshots[key]);
        }
        for (var key in this.state.dados[0].platforms) {
            platf.push(this.state.dados[0].platforms[key]);
        }
        var followers = `${this.state.dados[0].follows || 0} SEGUIDORES`
        var cover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.state.dados[0].cover.image_id}.jpg`
        this.setState({gameName : this.state.dados[0].name});
        this.setState({gameAbout : this.state.dados[0].summary});
        this.setState({gameImages : imgs})
        this.setState({gamePlatform : platf})
        this.setState({gameCover : cover})
        this.setState({gameFollows : followers})
        this.setState({gameBackground : imgs[0].url})
    } catch (error) { alert(error) }
}

//HIDE AND SHOW MODAL
handleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible})

//RENDERING SCREENSHOTS
renderItem = data => (
  <View
      key={data.url}
      style={styles.cardContainer}>
      <View
      style={styles.cardWrapper}>
      <Image
          style={styles.card}
          source={{ uri:  `https://images.igdb.com/igdb/image/upload/t_screenshot_med/${data.image_id}.jpg`}}/>
      </View>
  </View>
  );

  //LIFECYCLE START
  componentDidMount() {
    getApi("call",Math.floor(Math.random() * 30), 50).then(v => {
      this.setState({ dados: v },() => {
        this.populate()
      });

  });
  }
  render() {

    return (
      // LOGO AND SEARCH BAR
          <SafeAreaView  style={styles.container}>
             <StatusBar style={styles.statusBar}/>
              <SafeAreaView style={styles.topContainer}>
                  <Image source={staticImage} style={styles.imageLogo}/>
                  <TouchableOpacity onPress={this.handleModal} style={styles.imageIcon}>
                      <Image source={searchIcon} style={styles.imageIcon} />
                  </TouchableOpacity>
              </SafeAreaView>

              {/* COVER AND TITLE AREA*/}
              <SafeAreaView style={{ width: "100%", height: "38%", top:"8%", position:"absolute"}}>
                  <ImageBackground source={{ uri: "https:"+this.state.gameBackground }} style={styles.backgroundLogo} blurRadius={2}>
                      <ImageBackground source={shadowImg} style={styles.shadowLogo}>
                          <Image source={{ uri: this.state.gameCover }} style={styles.imageCover}/>
                          <Text style={styles.title}>{this.state.gameName || ""}</Text>
                          <Text style={styles.textoConsoles}>{consoless(this.state.gamePlatform) || ""}</Text>
                          <View style={{backgroundColor: "#3f3f3f", borderRadius: 5, padding: 4, margin: 10}}>
                              <Text style={styles.textoFollowers}>{this.state.gameFollows}</Text>
                          </View>
                          <Modal isVisible={this.state.isModalVisible} useNativeDriver={true}  style={{animationType: "none"}}>
                              <View style={{ flex: 1 }}>
                                  <TextInput 
                                      style={{ padding: 20,margin: 10,fontSize: 18, fontWeight: "bold", backgroundColor: "#bfbfbf", borderRadius: 30}}
                                      placeholder={"search"} 
                                      onSubmitEditing={event => this.setState({searchQuery : event.nativeEvent.text}, this.search(event.nativeEvent.text))}
                                      defaultValue={""}/>
                              <Button title="Close" onPress={this.handleModal} style={styles.closeSearch}/>
                              </View>
                          </Modal>
                      </ImageBackground>
                  </ImageBackground>
              </SafeAreaView>

              {/* SCREENSHOTS AREA */}
              <SafeAreaView style={{ width: "100%", height: "20%", top:"46%", position:"absolute"}}>
                  <Carousel
                      pagination={Pagination}
                      renderItem={this.renderItem}
                      data={this.state.gameImages}
                      loop
                      autoplay
                  />
              </SafeAreaView>

              {/* TEXT ABOUT AREA */}
              <ScrollView style={styles.scrollView}>
                  <Text style={styles.subTitle}>About:</Text>
                  <Text style={styles.textoSimples}>{this.state.gameAbout || ""}</Text>
              </ScrollView>

              {/* NOT YET IMPLEMENTED, WILL BE TOGETHER WITH LOADING ANIMATION */}
              <Toast 
                  position={'bottom'}
                  bottomOffset={90}
              />
      </SafeAreaView>
  )
  }
}
