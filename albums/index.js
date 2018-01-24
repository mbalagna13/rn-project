// Index.ios.js - place code in here for IOS

// Import a library to help creat a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);

// Render it to the device. Only root component uses AppRegistry
// While every other component uses an export statement
AppRegistry.registerComponent('albums', () => App);
