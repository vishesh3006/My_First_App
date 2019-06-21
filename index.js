
/**
 * @format
 */

//Import a library to help create a component


import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/Components/header';
import AlbumList from './src/Components/AlbumList';
//Create Component

const App = () => {
    return (
        <View style={{flex: 1}}>
        <Header headerText={'Albums'}/>
        <AlbumList />
        </View>
    );
};

//Render it to Device

AppRegistry.registerComponent('albums', () => App);