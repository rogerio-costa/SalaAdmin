import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/splashScreen';
import LoginScreen from './src/screens/loginScreen';
import Home from './src/screens/Home';
import TurmaScreen from './src/screens/turmaScreen';
import AtividadeScreen from './src/screens/atividadeScreen';
import AlunoScreen from './src/screens/alunoScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TurmaScreen" component={TurmaScreen} />
        <Stack.Screen name="AtividadeScreen" component={AtividadeScreen} />
        <Stack.Screen name="AlunoScreen" component={AlunoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}