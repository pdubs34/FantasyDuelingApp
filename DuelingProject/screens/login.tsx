import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import LoginForm from '../components/loginform.tsx'

const LoginScreen: React.FC = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    return (
    <View>
    <LoginForm navigation = {navigation}/>
    </View>
    );
}

export default LoginScreen