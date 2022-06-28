import React from "react";
import { StyleSheet, Dimensions} from "react-native";

const MusicCardStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
    }, 
    image_container:{
        flex: 35,
        backgroundColor: 'white',
        height: Dimensions.get("window").height/5.5,
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft:10
    },
    image: {
        marginTop: 5,
        marginHorizontal: 7,
        height: 100,
        width: 100,
        borderRadius: 500/2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'purple',
    },
    information_container: {
        flex: 70,
        width: Dimensions.get("window").width/1,
        height: 108,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginRight: 10
    },
    information_title: {
        marginTop: 15,
        marginLeft: 10,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 27,
    },
    information_artist: {
        marginTop: 5,
        marginLeft: 10
    },
    information_year: {
        fontSize: 10,
        marginLeft: 10,
        fontStyle: 'italic'
    }
})

export default MusicCardStyle;