import React from "react";
import { StyleSheet, Dimensions} from "react-native";

const MusicCardStyle = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'row',
    }, 
    image_container:{
        flex: 35,
        backgroundColor: 'indigo',
        height: Dimensions.get("window").height/6.9,
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft:10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    image: {
        marginTop: 5,
        marginHorizontal: 7,
        height: 100,
        width: 100,
        borderRadius: 500/2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'white',
    },
    information_container: {
        flex: 70,
        width: Dimensions.get("window").width/1,
        height: 108,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginRight: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
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
    },
    sold_out_container: {
        flex: 10, 
        position: "absolute",
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        bottom: '25%',
    },
    sold_out_text: {
        textAlign: 'center',
    }
})

export default MusicCardStyle;