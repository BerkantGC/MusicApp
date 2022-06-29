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
import SearchBar from './components/SearchBar';


const App = () => {
  const [list, setList] = useState(music_data);
  const renderItem = ({item}) => <MusicCard music = {item} />
  
  const HandleSearch = text => 
  {
    const filteredList = music_data.filter(music =>{
      const searchedText = text.toLowerCase();
      const currentTitle = music.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return(
    <SafeAreaView style = {BackStyle.container}>
      <SearchBar onSearch = {HandleSearch}/>
        <FlatList 
        data = {list}
        renderItem = {renderItem}
        keyExtractor ={item => item.id}
        />
    </SafeAreaView>
  );
}

const BackStyle = new StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
})

export default App;
