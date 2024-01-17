import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Dimensions, Image, Platform  } from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import NavStyles from '../styles/navstyles.js';
import NavBar from '../components/NavBar.tsx';

const HomeScreen = ({ navigation, route }) => {

  return (
    <View style = {{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "grey", justifyContent: "center"}}>
        <View style = {{zIndex: 0}}>
        <Text>Hellllllllllllllloasdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf</Text>
        </View>
       <NavBar/>
    </View>
  );
};

export default HomeScreen;
