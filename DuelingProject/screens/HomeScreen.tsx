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
  const [isNavboxOpen, setNavboxOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-windowWidth * 0.65)).current;

  return (
    <View style={NavStyles.container}>
        <NavBar/>
        <View style = {NavStyles.content}>

        </View>
    </View>
  );
};

export default HomeScreen;
