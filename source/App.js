import React, {useState} from 'react';
import music_data from './components/Datas/music-data.json'
import MusicCard from './components/MusicCard';

import { 
  View, 
  Text,
  Image,
  SafeAreaView, 
  StyleSheet,
  FlatList
} from 'react-native';


const App = () => {
  const renderItem = ({item}) => <MusicCard music = {item} />
  
  return(
    <SafeAreaView style = {BackStyle.container}>
        <FlatList 
        data = {music_data}
        renderItem = {renderItem}
        keyExtractor ={item => item.id}
        />
    </SafeAreaView>
  );
}

const BackStyle = new StyleSheet.create({
  container: {
    backgroundColor: "cyan",
    flex: 1,
  },
})

export default App;
