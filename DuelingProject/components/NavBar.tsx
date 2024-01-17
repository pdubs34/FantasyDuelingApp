import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Animated, Dimensions, Image, Platform,SafeAreaView, Easing   } from 'react-native';
import LoginForm from '../components/loginform.tsx';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import NavStyles from "../styles/navstyles.js";


const NavBar: React.FC = () => {
  const [isNavboxOpen, setNavboxOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(isNavboxOpen ? windowWidth * 0.75 : windowWidth * 0.1)).current;
  const textOpacity = useRef(new Animated.Value(isNavboxOpen ? 0 : 1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: isNavboxOpen ? windowWidth * 0.1 : windowWidth * 0.75,
        duration: isNavboxOpen ? 1000 : 1000, // Decrease duration for showing up
        easing: Easing.ease,
        useNativeDriver: false,
      }),
      Animated.timing(textOpacity, {
        toValue: isNavboxOpen ? 0 : 1,
        duration: isNavboxOpen ? 300 : 300, // Decrease duration for showing up
        delay: isNavboxOpen ? 0 : 700, // Increase delay for showing up
        useNativeDriver: false,
        easing: Easing.ease,
      }),
    ]).start();
  }, [isNavboxOpen]);



  const onSlideBarPress = () => {
    setNavboxOpen(!isNavboxOpen);
  };

  return (
    <View style= {{position: "absolute", left: 0, right: 0, top: 0, bottom: 0}}>
      <Animated.View style={[NavStyles.navbox,{ width: slideAnim, zIndex: 1 }]}>
              <TouchableOpacity style = {NavStyles.topNavigationItem} onPress={() => onSlideBarPress()}>
              <FontAwesomeIcons name="home" size={windowWidth * 0.08} color="#000" />
                                <Animated.View style={{ opacity: textOpacity }}>
                                        <Text style={NavStyles.navigationItemText}>Home</Text>
                                </Animated.View>



              </TouchableOpacity>
              <TouchableOpacity style = {NavStyles.navigationItem} onPress={() => onSlideBarPress()}>
              <MaterialIcons name="sports-football" size={30} color="#000"/>
                                              <Animated.View style={{ opacity: textOpacity }}>
                                                      <Text style={NavStyles.navigationItemText}>Live Sports</Text>
                                              </Animated.View>
              </TouchableOpacity>
              <TouchableOpacity style = {NavStyles.navigationItem} onPress={() => onSlideBarPress()}>
              <MaterialCommunityIcons name="fencing" size= {30} color="#000"/>
                                              <Animated.View style={{ opacity: textOpacity }}>
                                                      <Text style={NavStyles.navigationItemText}>Duels</Text>
                                              </Animated.View>

              </TouchableOpacity>
              <TouchableOpacity style = {NavStyles.navigationItem} onPress={() => onSlideBarPress()}>
              <MaterialIcons name="leaderboard" size = {30} color="#000"/>
                                              <Animated.View style={{ opacity: textOpacity }}>
                                                      <Text style={NavStyles.navigationItemText}>Leaderboards</Text>
                                              </Animated.View>

              </TouchableOpacity>
              <TouchableOpacity style = {NavStyles.navigationItem} onPress={() => onSlideBarPress()}>
              <FontAwesomeIcons name="history" size={30} color="#000"/>
                                                    <Animated.View style={{ opacity: textOpacity }}>
                                                            <Text style={NavStyles.navigationItemText}>Duel History</Text>
                                                    </Animated.View>

              </TouchableOpacity>
              <TouchableOpacity style = {NavStyles.navigationItem} onPress={() => onSlideBarPress()}>
              <AntDesignIcons name= "user" size={30} color="#000"/>
                                                      <Animated.View style={{ opacity: textOpacity }}>
                                                              <Text style={NavStyles.navigationItemText}>Profile</Text>
                                                      </Animated.View>

              </TouchableOpacity>
              <TouchableOpacity style = {NavStyles.navigationItem} onPress={() => onSlideBarPress()}>
              <AntDesignIcons name= "phone" size={30} color="#000"/>
                                                      <Animated.View style={{ opacity: textOpacity }}>
                                                              <Text style={NavStyles.navigationItemText}>Contact Us</Text>
                                                      </Animated.View>

              </TouchableOpacity>
              <View style= {{flex: 6.375}}>

              </View>

            </Animated.View>
            {/*{!isNavboxOpen && (
                        <View style = {{flex: 1, backgroundColor: "white"}}>
                           </View>
            )}
            */}

      </View>
  );
};

export default NavBar;