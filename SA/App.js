import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import EntryRegister from './src/screens/EntryRegister';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false  }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false  }} />
        <Stack.Screen name="EntryRegister" component={EntryRegister} options={{ headerShown: false  }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;