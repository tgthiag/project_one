import React, { Component, useState, useEffect }  from "react";
import {View, Text, Image, Button, ScrollView, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import getApi from "../../functions/api";
import Toast from 'react-native-toast-message';
import showToast from "../../functions/Toast";
import Carousel, {Pagination} from 'react-native-x-carousel';
import Modal from "react-native-modal";
import styles from "./style";
import consoless from "../../functions/platforms";

//IMAGES
const staticImage = require("../../../..//assets/thegamers.png");
const shadowImg = require("../../../..//assets/shadowBackground.png");
const searchIcon = require("../../../..//assets/search.png");

export default function DiscoverGames(){
    //STATES
    const [dados, setData] = useState([])
    const [gameName, setGameName] = useState(null)
    const [gameAbout, setGameAbout] = useState(null)
    const [gameImages, setGameImages] = useState([])
    const [gameCover, setGameCover] = useState(null)
    const [gamePlatform, setGamePlatform] = useState([])
    const [gameFollows, setgameFollows] = useState(null)
    const [gameBackground, setGameBackground] = useState(null)
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    const [searchQuery, setSearchQuery] = useState("");

    //CALL API INTIAL AND AFTER SEARCH
    useEffect(()=>{
        if(searchQuery != ""){
            getApi(searchQuery,0, 10).then(v => {
                setData(v)

            });
        }else{
            getApi("call",Math.floor(Math.random() * 30), 50).then(v => {
                setData(v)
            });
        }
        },[searchQuery]
    );

    //POPULATE DATA AND IMAGES
    function populate(){
        try {
            console.log("dados size "+ dados.length)
            var imgs = []
            var platf = []
            for (var key in dados[0]["screenshots"]) {
                imgs.push(dados[0]["screenshots"][key]);
            }
            for (var key in dados[0]["platforms"]) {
                platf.push(dados[0]["platforms"][key]);
            }
            var followers = `${dados[0].follows || 0} SEGUIDORES`
            var cover = `https://images.igdb.com/igdb/image/upload/t_cover_big/${dados[0]["cover"]["image_id"]}.jpg`
            setGameName(dados[0].name);
            setGameAbout(dados[0].summary);
            setGameImages(imgs)
            setGamePlatform(platf)
            setGameCover(cover)
            setgameFollows(followers)
            setGameBackground(imgs[0].url)
        } catch (error) { }
    }
        //VERIFY CHANGES AND CALL POPULATE FUNCTION
    useEffect(() => {
        var i= 0
        let myInterval = setInterval(() => {
            i++
            if (i > 1 || gameCover != null) {
                clearInterval(myInterval);
            }
            populate()
            }, 5000
            );
        }, [dados]
    );

    // RENDER SCREENSHOT IMAGES
    const renderItem = data => (
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

    return (
        // LOGO AND SEARCH BAR
            <SafeAreaView  style={styles.container}>
               <StatusBar style={styles.statusBar}/>
                <SafeAreaView style={styles.topContainer}>
                    <Image source={staticImage} style={styles.imageLogo}/>
                    <TouchableOpacity onPress={handleModal} style={styles.imageIcon}>
                        <Image source={searchIcon} style={styles.imageIcon} />
                    </TouchableOpacity>
                </SafeAreaView>

                {/* COVER AND TITLE AREA*/}
                <SafeAreaView style={{ width: "100%", height: "38%", top:"8%", position:"absolute"}}>
                    <ImageBackground source={{ uri: "https:"+gameBackground }} style={styles.backgroundLogo} blurRadius={2}>
                        <ImageBackground source={shadowImg} style={styles.shadowLogo}>
                            <Image source={{ uri: gameCover }} style={styles.imageCover}/>
                            <Text style={styles.title}>{gameName || ""}</Text>
                            <Text style={styles.textoConsoles}>{consoless(gamePlatform) || ""}</Text>
                            <View style={{backgroundColor: "#3f3f3f", borderRadius: 5, padding: 4, margin: 10}}>
                                <Text style={styles.textoFollowers}>{gameFollows}</Text>
                            </View>
                            <Modal isVisible={isModalVisible} useNativeDriver={true}  style={{animationType: "none"}}>
                                <View style={{ flex: 1 }}>
                                    <TextInput 
                                        style={{ padding: 20,margin: 10,fontSize: 18, fontWeight: "bold", backgroundColor: "#bfbfbf", borderRadius: 30}}
                                        placeholder={"search"} 
                                        onSubmitEditing={event => setSearchQuery(event.nativeEvent.text)}
                                        defaultValue={""}/>
                                <Button title="Close" onPress={handleModal} style={styles.closeSearch}/>
                                </View>
                            </Modal>
                        </ImageBackground>
                    </ImageBackground>
                </SafeAreaView>

                {/* SCREENSHOTS AREA */}
                <SafeAreaView style={{ width: "100%", height: "20%", top:"46%", position:"absolute"}}>
                    <Carousel
                        pagination={Pagination}
                        renderItem={renderItem}
                        data={gameImages}
                        loop
                        autoplay
                    />
                </SafeAreaView>

                {/* TESXT ABOUT AREA */}
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.subTitle}>About:</Text>
                    <Text style={styles.textoSimples}>{gameAbout || ""}</Text>
                </ScrollView>

                {/* NOT YET IMPLEMENTED, WILL BE TOGETHER WITH LOADING ANIMATION */}
                <Toast 
                    position={'bottom'}
                    bottomOffset={90}
                />
        </SafeAreaView>
    )
}
