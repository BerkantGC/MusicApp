import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";

const Home = (props) => {
    
    return(
        <View style ={ HomeStyle.back}>
             <Image style = {HomeStyle.image} source={require("../components/Images/pngwing.com.png")} />
             <View>
                <Text style = {HomeStyle.button_text}>Welcome to     Music Player!</Text>
             </View>
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
        color: 'white',
    },
    back: {
        backgroundColor: 'black',
        flex: 1
    },
    image: {
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: Dimensions.get("window").height/15,
        height: 350,
        width: 350,
        borderRadius: 500/4,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: Dimensions.get("window").height/15,
    }
})

export default Home;