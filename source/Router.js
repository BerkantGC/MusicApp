import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Musics from "./Pages/Musics_page";
import Home from './Pages/Home';
import Detail from './Pages/Detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return(
        <Stack.Navigator screenOptions={{  headerShown: false }}>
                    <Stack.Screen name = 'Musics_menu' component={Musics} />
                    <Stack.Screen name = 'Detail_menu' component={Detail} />
        </Stack.Navigator>
    )
}
const App = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: ButtonStyles.tab_bar}}>
            <Tab.Screen name = 'Home' component={Home} options = 
            {{
                tabBarIcon: ({focused}) => (
                    <View style ={ButtonStyles.home_button}>
                        <Image style = {[ButtonStyles.home_button_image, {tintColor: focused ? 'blue' : 'black'}]} source = {require("./components/Images/house.png")}/>
                    </View>
                )
            }}
            />
            <Tab.Screen name = 'Player' component={HomeTab} options = 
            {{
                tabBarIcon: ({focused}) => (
                    <View style ={ButtonStyles.home_button}>
                        <Image style = {[ButtonStyles.home_button_image, {tintColor: focused ? 'blue' : 'blacks'}]} source = {require("./components/Images/music.png")}/>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
    );
}

const ButtonStyles = StyleSheet.create({
    tab_bar: {
        position: 'absolute',
        left: 10,
        right:  10,
        bottom: 0,
        elevation: 0,
        borderRadius: 10,
        height: 50,
        marginTop: 20
        },
    home_button:{
        alignItems: 'center', 
        justifyContent: 'center',
        top: 10,
    },
    home_button_image: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        marginBottom: 10,
    }
})

export default App;
