import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const Home = (props) => {
    function navigateToPage()
    {
        props.navigation.navigate('Musics_menu');
    }
    return(
        <View style ={ HomeStyle.back}>
            <TouchableOpacity onPress = {navigateToPage}>
                <View style = {HomeStyle.button}>
                <Text style = {HomeStyle.button_text}>
                    Music Player
                </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const HomeStyle = StyleSheet.create({
    button: {
        borderWidth: 5,
        borderRadius: 5,
        borderColor: 'darkorchid',
        margin: 18,
        backgroundColor: 'darkslategrey',
        marginTop: Dimensions.get('window').height / 2.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    button_text: {
        fontSize: 45,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    back: {
        backgroundColor: 'black',
        flex: 1
    }
})

export default Home;