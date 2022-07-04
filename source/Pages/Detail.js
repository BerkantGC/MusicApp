import React, {useEffect, useState} from "react";
import {Slider} from '@miblanchard/react-native-slider';
import 
{
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Animated,
} from 'react-native';

import TrackPlayer, {
    Capability,
    Event,
    RepeatMode,
    State,
    usePlaybackState,
    useProgress,
    useTrackPlayerEvents,
} from "react-native-track-player";

import songs from '../components/Datas/music-data';
import play_button_image from '../components/Images/button-icon-png-21060.png';
import pause_button_image from '../components/Images/SeekPng.com_pause-symbol-png_2944357.png';

const togglePlayback = async(playBackState) =>
{
    if(playBackState == State.Paused || playBackState == State.Ready)
    {
        await TrackPlayer.play();
    }
    if(playBackState == State.Playing) {
        await TrackPlayer.pause();
    }
}

const Detail = (props) =>
{
    let index = props.route.params.url - 1;

    const setupPlayer = async() => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(songs[index]);
    }
    const [showPlayButton, setShowPlayButton] = useState(true);
    const playBackState = usePlaybackState();
    const {position, duration} = useProgress();
    var tmpImage;

    useEffect(()=> {
        setupPlayer();
    },[]);

    const handleChange = (value) =>
    {
        let newValue = parseInt(value, 10)
        TrackPlayer.seekTo(newValue);
    };

    function changeButton()
    {
        tmpImage = (showPlayButton ? play_button_image : pause_button_image);
        return(<Image style = {DetailStyle.play_button} source={tmpImage}/>);

    }
        return (
        <ImageBackground source={{uri : songs[index].artwork}} imageStyle= {DetailStyle.image}>
            <View style = {DetailStyle.title_container}>
                <Text style={DetailStyle.title} >{songs[index].title}</Text>
            </View>
            <View style = {DetailStyle.button_container}>
            <TouchableOpacity onPress={() =>TrackPlayer.skipToPrevious()}>
                <Image style = {DetailStyle.prev_button} source={require('../components/Images/048566126c09b700ccd4c035c6168ca4.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                {
                    setShowPlayButton(!showPlayButton);
                    togglePlayback(playBackState);
                }}>
                    {changeButton()}
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() =>TrackPlayer.skipToNext()}>
                <Image style = {DetailStyle.next_button} source={require('../components/Images/048566126c09b700ccd4c035c6168ca4.png')}/>
                </TouchableOpacity>
            </View>
            <View>
                <Slider
                    style = {DetailStyle.progressContainer}
                    value = {position}
                    minimumValue={0}
                    maximumValue={duration}
                    thumbTintColor='darkorchid'
                    minimumTrackTintColor="darkorchid"
                    maximumTrackTintColor="black"
                    onSlidingComplete={handleChange}
                />
            </View>
        </ImageBackground>        
    )

}

const DetailStyle = StyleSheet.create({
    title_container: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: Dimensions.get('window').height/3.7, 
        marginLeft: 2
        },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },   
    play_button: {
        width: 100,
        height: 100,
        marginTop: Dimensions.get('window').height/13,
        marginLeft: 40,
        alignItems: 'center',
        resizeMode: 'center'
    },
    next_button: {
        width: 45,
        height: 45,
        marginLeft: Dimensions.get('window').width/15,
        marginTop: 55,
        alignItems: 'center',
        resizeMode: 'center'
    },
    prev_button:{
        width: 45,
        height: 45,
        marginLeft: Dimensions.get('window').width/6,
        marginTop: 55,
        alignItems: 'center',
        resizeMode: 'center',
        transform: [{ rotate: '180deg' }]
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
        resizeMode: 'center',
        marginBottom: 100
    },
    progressContainer: {
        width: 50,
        height:150
    },
    image: {
        height: Dimensions.get('window').height/1.2,      
        resizeMode: 'cover',
        opacity: 0.5,
    }
})

export default Detail;