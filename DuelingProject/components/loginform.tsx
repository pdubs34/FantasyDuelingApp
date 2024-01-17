
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { View, TextInput, Button, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import LoginStyles from "../styles/loginstyles.js";

const LoginForm: React.FC = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (navigation) => {
    navigation.navigate('Home', {name: 'Joe'})
  };

  return (
    <SafeAreaView style = {LoginStyles.pageHolder}>
      <View style = {LoginStyles.loginHolder}>
      <Image
       source={require('../siteart/fencing2.png')}
       style={{ width: 250, height: 250, resizeMode: 'contain' }}/>
      <Text style = {LoginStyles.label} >Fantasy Duel : A Gentlemen's Agreement</Text>
      <TextInput
        style={LoginStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
                style={LoginStyles.loginScreenButton}
                onPress={() => handleLogin(navigation)}
      >
                <Text style={LoginStyles.loginText}>Login</Text>
       </TouchableOpacity>
       <Text>*Placeholder for sign up button*</Text>
       </View>
    </SafeAreaView>
  );
};

export default LoginForm;
