import React from "react";
import MusicCardStyle from "./MusicCard.Style";

import{
    Image,
    View,
    Text
} from 'react-native';

const MusicCard = ({music}) =>
{
    return(
    <View style = {MusicCardStyle.container}>
        <View style = {MusicCardStyle.image_container}>
        <Image style = {MusicCardStyle.image} source = {{uri: music.imageUrl}}></Image>
        </View>
        <View style = {MusicCardStyle.information_container}>
            <Text style = {MusicCardStyle.information_title}>{music.title}</Text>
            <Text style = {MusicCardStyle.information_artist}>{music.artist}</Text>
            <Text style = {MusicCardStyle.information_year}>{music.year}</Text>
        </View>
    </View>)
}

export default MusicCard;