import * as React from 'react';
import Text from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/login.tsx'
import HomeScreen from './screens/HomeScreen.tsx'

const Stack = createNativeStackNavigator();



const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;