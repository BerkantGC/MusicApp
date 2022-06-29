import React from "react";
import {
    View, 
    TextInput,
} from 'react-native';
import SearchBarStyle from "./SearchBar.Style";

const SearchBar = (props) => {
    return (
    <View style= {SearchBarStyle.container}>
        <TextInput placeholder="Search here..." onChangeText= {props.onSearch} />
    </View>
    );
}

export default SearchBar;