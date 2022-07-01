import React, { useState } from "react";
import MusicCardStyle from "./MusicCard.Style";

import {
    Image,
    View,
    Text,
} from 'react-native';
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";


const MusicCard = ({ music }) => {

    return (
        <View style={MusicCardStyle.container}>
            <View style={MusicCardStyle.image_container}>
                <Image style={MusicCardStyle.image} source={{ uri: music.artwork }}></Image>
            </View>
            <View style={MusicCardStyle.information_container}>
                <Text style={MusicCardStyle.information_title}>{music.title}</Text>
                <Text style={MusicCardStyle.information_artist}>{music.artist}</Text>
                <Text style={MusicCardStyle.information_year}>{music.year}</Text>
            </View>

            <View style={MusicCardStyle.sold_out_container}> 
                    {(music.isSoldOut == true) ? <Text style = {MusicCardStyle.sold_out_text}>SOLD OUT!</Text> : null}
            </View>
        </View>)
}

export default MusicCard;