import React, {useState} from 'react';
import music_data from '../components/Datas/music-data';
import MusicCard from '../components/MusicCard/MusicCard';

import { 
  View, 
  Text,
  Image,
  SafeAreaView, 
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import SearchBar from '../components/SearchBar';

const Music_page = (props) =>
{
    const [list, setList] = useState(music_data);
    const renderItem = ({item}) => <TouchableOpacity on onPress={() => navigateToPage({item})}><MusicCard music = {item} /></TouchableOpacity>;
    
    const HandleSearch = text => 
    {
      const filteredList = music_data.filter(music =>{
        const searchedText = text.toLowerCase();
        const currentTitle = music.title.toLowerCase();
  
        return currentTitle.indexOf(searchedText) > -1;
      });
      setList(filteredList);
    };
  
    function navigateToPage({item}){
      props.navigation.navigate('Detail_menu', item);

    }
    

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
      backgroundColor: "black",
      flex: 1,
    },
    button_container: {
      borderWidth: 2,
      position: 'absolute',      
      right: 3,
      width: 80,
      color: 'white'
    },
    button_title: {
      textAlign: 'center',
      color: 'white'
    }
  })

  export default Music_page;