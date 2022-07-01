import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Musics from "./Pages/Musics_page";
import Home from './Pages/Home';
import Detail from './Pages/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{  headerShown: false }}>
            <Stack.Screen name = 'Home_menu' component={Home} />
            <Stack.Screen name = 'Musics_menu' component={Musics} />
            <Stack.Screen name = 'Detail_menu' component={Detail} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}



export default App;
