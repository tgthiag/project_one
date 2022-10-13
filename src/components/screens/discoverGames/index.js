import React, { Component, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import getApi from "../../functions/api";
import Toast from "react-native-toast-message";
import showToast from "../../functions/Toast";
import Carousel, { Pagination } from "react-native-x-carousel";
import Modal from "react-native-modal";
import consoless from "../../functions/platforms";
import styles from "./style";

//Images
const staticImage = require("../../../..//assets/thegamers.png");
const shadowImg = require("../../../..//assets/shadowBackground.png");
const searchIcon = require("../../../..//assets/search.png");

var about = "";

export default class MyParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
      gameName: null,
      gameAbout: null,
      gameImages: [],
      gameCover: null,
      gamePlatform: [],
      gameFollows: null,
      gameBackground: null,
      isModalVisible: false,
    };
  }
  //ON SEARCH
  search(string) {
    showToast("Aguarde um momento..");
    this.handleModal();
    getApi(string, 0, false).then((v) => {
      this.setState({ dados: v }, () => {
        this.populate();
      });
    });
  }
  //LOADING DATA AND IMAGES
  populate() {
    try {
      var followers = `${this.state.dados[0].follows || 0} SEGUIDORES`;
      var cover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.state.dados[0].cover.image_id}.jpg`;
      this.setState({
        gameName: this.state.dados[0].name,
        gameAbout: this.state.dados[0].summary,
        gameImages: this.state.dados[0].screenshots,
        gamePlatform: this.state.dados[0].platforms,
        gameCover: cover,
        gameFollows: followers,
        gameBackground: this.state.dados[0].screenshots[0].url,
      });
      about = "About";
    } catch (error) {
      alert(error);
    }
  }

  //HIDE AND SHOW MODAL
  handleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  //RENDERING SCREENSHOTS
  renderItem = (data) => (
    <View key={data.url} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image
          style={styles.card}
          source={{
            uri: `https://images.igdb.com/igdb/image/upload/t_screenshot_med/${data.image_id}.jpg`,
          }}
        />
      </View>
    </View>
  );
  //GENERATE RANDOM COLORS FOR PLATFORMS CONTAINERS
  generateColor() {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${randomColor}`;
  }

  //LIFECYCLE START
  componentDidMount() {
    getApi("", Math.floor(Math.random() * 40), true).then((v) => {
      this.setState({ dados: v }, () => {
        this.populate();
      });
    });
  }

  render() {
    return (
      // LOGO AND SEARCH BAR
      <SafeAreaView style={styles.container}>
        <StatusBar style={styles.statusBar} />
        <SafeAreaView style={styles.topContainer}>
          <Image source={staticImage} style={styles.imageLogo} />
          <TouchableOpacity onPress={this.handleModal} style={styles.imageIcon}>
            <Image source={searchIcon} style={styles.imageIcon} />
          </TouchableOpacity>
        </SafeAreaView>

        {/* COVER AND TITLE AREA*/}
        <SafeAreaView
          style={{
            width: "100%",
            height: "38%",
            top: "8%",
            position: "absolute",
          }}
        >
          <ImageBackground
            source={{ uri: "https:" + this.state.gameBackground }}
            style={styles.backgroundLogo}
            blurRadius={2}
          >
            <ImageBackground source={shadowImg} style={styles.shadowLogo}>
              <Image
                source={{ uri: this.state.gameCover }}
                style={styles.imageCover}
              />
              <Text style={styles.title}>{this.state.gameName || ""}</Text>
              {/* PLATFORMS */}
              <FlatList
                horizontal={true}
                data={consoless(this.state.gamePlatform)}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flex: 1,
                      flexWrap: "wrap",
                      height: "50%",
                      marginLeft: 2,
                      marginRight: 2,
                      opacity: 0.5,
                      paddingRight: 3,
                      paddingLeft: 3,
                      backgroundColor: this.generateColor(),
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 15,
                    }}
                  >
                    <Text>{item.index}</Text>
                  </View>
                )}
              />
              {/* FOLLOWERS */}
              <View
                style={{
                  backgroundColor: "#3f3f3f",
                  borderRadius: 5,
                  padding: 3,
                }}
              >
                <Text style={styles.textoFollowers}>
                  {this.state.gameFollows}
                </Text>
              </View>
              {/* MODAL */}
              <Modal
                isVisible={this.state.isModalVisible}
                useNativeDriver={true}
                onRequestClose={this.handleModal}
                onPress={this.handleModal}
                style={{ animationType: "none" }}
              >
                <View style={{ flex: 1 }}>
                  <TextInput
                    style={{
                      padding: 20,
                      margin: 10,
                      fontSize: 18,
                      fontWeight: "bold",
                      backgroundColor: "#bfbfbf",
                      borderRadius: 30,
                      opacity: 0.5,
                    }}
                    placeholder={"search"}
                    onSubmitEditing={(event) =>
                      this.setState(
                        { searchQuery: event.nativeEvent.text },
                        this.search(event.nativeEvent.text)
                      )
                    }
                    defaultValue={""}
                  />
                </View>
              </Modal>
            </ImageBackground>
          </ImageBackground>
        </SafeAreaView>

        {/* SCREENSHOTS AREA */}
        <SafeAreaView
          style={{
            width: "100%",
            height: "20%",
            top: "46%",
            position: "absolute",
          }}
        >
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
          <Text style={styles.subTitle}>{about}</Text>
          <Text style={styles.textoSimples}>{this.state.gameAbout || ""}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
